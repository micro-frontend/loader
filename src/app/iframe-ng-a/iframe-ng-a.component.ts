import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe-ng-a',
  templateUrl: './iframe-ng-a.component.html',
  styleUrls: ['./iframe-ng-a.component.scss'],
})
export class IframeNgAComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.addEventListener('message', (msg: MessageEvent) => {
      const data = msg.data as { channel: string, message: string };
      if (data.channel === 'mf-slave') {
        alert(`${data.message} @ master`);
      }
    });
  }

  sendMessage(iframe: HTMLIFrameElement, message: string): void {
    iframe.contentWindow.postMessage({ channel: 'mf-master', message }, '*');
  }
}
