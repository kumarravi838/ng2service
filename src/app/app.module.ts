import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,HomeComponent,ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers:[
    appRoutingProviders,
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard
  ]
})
export class AppModule { }


