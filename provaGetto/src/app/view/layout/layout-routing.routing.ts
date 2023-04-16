import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children:[
      {path:'1', component: HomeComponent},
      {path:'2', component: AboutComponent},
    ],

    },
  { path: '**', redirectTo: '1'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
