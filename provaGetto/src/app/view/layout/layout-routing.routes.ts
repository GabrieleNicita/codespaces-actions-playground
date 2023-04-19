import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children:[
      {path:'', component: HomeComponent},
      {path:'about', component: AboutComponent},
      {path:'schedule', component:  ScheduleComponent}
    ],
    },
  { path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
