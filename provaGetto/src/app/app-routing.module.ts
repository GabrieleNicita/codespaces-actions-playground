import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './view/sharedView/layout/layout.component';


const routes: Routes = [

  { path: 'admin', loadChildren: () => import('./view/admin/admin.module').then(m => m.AdminModule) },

  { path: 'home', loadChildren: () => import('./view/layout/layout.module').then(m => m.LayoutModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }