import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactAComponent } from './react-a/react-a.component';
import { ReactAAndBComponent } from './react-a-and-b/react-a-and-b.component';
import { AppletBuilderComponent } from './applet-builder/applet-builder.component';
import { IframeNgAComponent } from './iframe-ng-a/iframe-ng-a.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/react-a',
  },
  {
    path: 'react-a',
    component: ReactAComponent,
  },
  {
    path: 'react-a-and-b',
    component: ReactAAndBComponent,
  },
  {
    path: 'applet-builder',
    component: AppletBuilderComponent,
  },
  {
    path: 'iframe-ng-a',
    component: IframeNgAComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
