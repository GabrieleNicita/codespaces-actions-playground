import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'admin', loadChildren: () => import('./view/admin/admin.module').then(m => m.AdminModule) },

  { path: 'red', loadChildren: () => import('./view/layout/layout.module').then(m => m.LayoutModule) },

  { path: '', redirectTo: 'red', pathMatch: 'full' },

  { path: '**', redirectTo: 'red' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }