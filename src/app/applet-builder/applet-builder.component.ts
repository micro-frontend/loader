import { Component, OnInit } from '@angular/core';
import { AppletModel } from '../shared/applet-loader/applet.model';

declare function require(id: string): AppletModel[];

@Component({
  selector: 'app-applet-builder',
  templateUrl: './applet-builder.component.html',
  styleUrls: ['./applet-builder.component.scss'],
})
export class AppletBuilderComponent implements OnInit {

  constructor() {
  }

  applets: AppletModel[] = require('./applets.json');

  ngOnInit() {
  }

}
