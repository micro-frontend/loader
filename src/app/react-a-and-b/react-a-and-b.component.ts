import { Component, OnInit } from '@angular/core';
import { AppletModel } from '../shared/applet-loader/applet.model';

@Component({
  selector: 'app-react-a-and-b',
  templateUrl: './react-a-and-b.component.html',
  styleUrls: ['./react-a-and-b.component.scss'],
})
export class ReactAAndBComponent implements OnInit {

  constructor() {
  }

  applets: AppletModel[] = [
    {
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
    },
    {
      id: 'react-b',
      body: `<noscript>You need to enable JavaScript to run this app.</noscript><h3>Test React B</h3><div id="root_$MFID$"></div>`,
      scripts: [
        '/assets/applet2/static/js/loader.js',
        '/assets/applet2/static/js/1.6105a37c.chunk.js',
        '/assets/applet2/static/js/main.a1469a93.chunk.js',
      ],
      styles: [
        '/assets/applet2/static/css/main.7a0cc0c9.chunk.css',
      ],
    },
  ];

  ngOnInit() {
  }

}
