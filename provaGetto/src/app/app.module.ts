import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/sharedView/home/home.component';
import { AltroComponent } from './view/sharedView/altro/altro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
