import { Component, OnInit } from '@angular/core';
import { AppletModel } from '../shared/applet-loader/applet.model';

@Component({
  selector: 'app-react-a',
  templateUrl: './react-a.component.html',
  styleUrls: ['./react-a.component.scss'],
})
export class ReactAComponent implements OnInit {
  constructor() {
  }

  applet: AppletModel = {
    id: 'react-a',
    body: `<noscript>You need to enable JavaScript to run this app.</noscript><h3>Test React A</h3><div id="root_$MFID$"></div>`,
    scripts: [
      '/assets/applet1/static/js/loader.js',
      '/assets/applet1/static/js/1.6105a37c.chunk.js',
      '/assets/applet1/static/js/main.fca4e889.chunk.js',
    ],
    styles: [
      '/assets/applet1/static/css/main.4a4a01ed.chunk.css',
    ],
  };

  ngOnInit() {
  }
}
