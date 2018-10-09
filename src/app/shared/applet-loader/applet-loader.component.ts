import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppletModel } from './applet.model';
import { HttpClient } from '@angular/common/http';
import { merge } from 'rxjs';
import { tap, toArray } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { StyleLoader } from '../services/style-loader.service';

@Component({
  selector: 'app-applet-loader',
  templateUrl: './applet-loader.component.html',
  styleUrls: ['./applet-loader.component.scss'],
})
export class AppletLoaderComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private styleLoader: StyleLoader) {
  }

  @Input()
  applet: AppletModel;
  body: SafeHtml;
  style: HTMLStyleElement;

  ngOnInit() {
    // 默认情况下  body 会被 DomSanitizer 进行安全消毒，
    this.body = this.sanitizer.bypassSecurityTrustHtml(this.applet.body);
    const styleTasks = this.applet.styles.map(url => this.http.get(url, { responseType: 'text' }));
    merge(...styleTasks).pipe(
      toArray(),
      // 构建时所有的 styles 中的地址都要进行修正，让它们都指向相对于 index 的 url 的路径
      tap(styles => {
        return this.style = this.styleLoader.load(styles.join('\n'));
      }),
    ).subscribe();
    const scriptTasks = this.applet.scripts.map(url => this.http.get(url, { responseType: 'text' }));
    merge(...scriptTasks).pipe(
      toArray(),
      // 一定要合并后加载，因为交错执行来自不同 applet 的脚本可能导致错误
      // tslint:disable:no-eval
      tap(scripts => {
        eval(scripts.join(';\n'));
      }),
    ).subscribe();
  }

  ngOnDestroy(): void {
    // 不要忘了销毁控件时也要卸载样式
    this.styleLoader.unload(this.style);
  }
}
