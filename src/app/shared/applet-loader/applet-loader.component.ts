import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppletModel } from './applet.model';
import { HttpClient } from '@angular/common/http';
import { merge } from 'rxjs';
import { map, tap, toArray } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { StyleLoader } from '../services/style-loader.service';
import { MacroExpander } from '../services/macro-expander.service';
import { IdGenerator } from '../services/id-generator.service';

@Component({
  selector: 'app-applet-loader',
  templateUrl: './applet-loader.component.html',
  styleUrls: ['./applet-loader.component.scss'],
})
export class AppletLoaderComponent implements OnInit, OnDestroy {

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private styleLoader: StyleLoader,
    private expander: MacroExpander,
    private idGenerator: IdGenerator,
  ) {
  }

  @Input()
  applet: AppletModel;
  body: SafeHtml;
  style: HTMLStyleElement;
  id: string;

  ngOnInit() {
    const id = this.id = this.idGenerator.next();
    // 默认情况下  body 会被 DomSanitizer 进行安全消毒，
    this.body = this.sanitizer.bypassSecurityTrustHtml(this.expander.expand(this.applet.body, { id }));
    const styleTasks = this.applet.styles.map(url => this.http.get(url, { responseType: 'text' }));
    merge(...styleTasks).pipe(
      map(style => this.expander.expand(style, { id })),
      toArray(),
      // 构建时所有的 styles 中的地址都要进行修正，让它们都指向相对于 index 的 url 的路径
      tap(styles => {
        return this.style = this.styleLoader.load(styles.join('\n'));
      }),
    ).subscribe();
    const scriptTasks = this.applet.scripts.map(url => this.http.get(url, { responseType: 'text' }));
    merge(...scriptTasks).pipe(
      map(script => this.expander.expand(script, { id })),
      toArray(),
      // 一定要合并后加载，因为交错执行来自不同 applet 的脚本可能导致错误
      // tslint:disable:no-eval
      tap(scripts => {
        // 重置环境，清除上一个小应用的残留状态
        window['webpackJsonp'] = undefined;
        eval(scripts.join(';\n'));
      }),
    ).subscribe();
  }

  ngOnDestroy(): void {
    // 不要忘了销毁控件时也要卸载样式
    this.styleLoader.unload(this.style);
  }
}
