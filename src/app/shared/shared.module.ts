import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppletLoaderComponent } from './applet-loader/applet-loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AppletLoaderComponent],
  exports: [AppletLoaderComponent],
})
export class SharedModule {
}
