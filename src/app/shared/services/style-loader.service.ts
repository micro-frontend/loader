import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleLoader {

  constructor() {
  }

  load(style: string): HTMLStyleElement {
    // TODO: 仿照 Angular 进行样式包装，使其对当前组件局部化
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerText = style;
    document.head.appendChild(styleElement);
    return styleElement;
  }

  unload(style: HTMLStyleElement): void {
    document.head.removeChild(style);
  }
}
