import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactAComponent } from './react-a/react-a.component';
import { ReactAAndBComponent } from './react-a-and-b/react-a-and-b.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppletBuilderComponent } from './applet-builder/applet-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactAComponent,
    ReactAAndBComponent,
    AppletBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
