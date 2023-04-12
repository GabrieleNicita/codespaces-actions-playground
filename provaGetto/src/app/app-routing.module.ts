import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './view/sharedView/layout/layout.component';
import { LayoutRoutingModule } from './view/sharedView/layout/layout-routing.routing';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }