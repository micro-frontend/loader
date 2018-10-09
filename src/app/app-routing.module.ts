import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactAComponent } from './react-a/react-a.component';
import { ReactAAndBComponent } from './react-a-and-b/react-a-and-b.component';

const routes: Routes = [
  {
    path: 'react-a',
    component: ReactAComponent,
  },
  {
    path: 'react-a-and-b',
    component: ReactAAndBComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
