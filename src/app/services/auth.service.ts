// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import{tokenNotExpired} from 'angular2-jwt';
// import { Router } from '@angular/router';
// import 'rxjs/add/operator/filter';
// import * as auth0 from 'auth0-js';
//avoid name not found warnings
declare var Auth0Lock:any;

@Injectable()
export class AuthService {
// Configure Auth0
//lock = new Auth0Lock('ZU6zzfUe3ThCC6v8UQaEM69HWzYA1gk6', 'techguyweb.auth0.com', {});
lock = new Auth0Lock('p5lfMS4zhlSkuyYIlfVaZScth1hl7elD', 'raviapiitsdindia.auth0.com', {});


constructor() {
  // Add callback for lock `authenticated` event
  this.lock.on("authenticated", (authResult:any) => {
    this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
        if(error){
            throw new Error(error);
        }
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile)); 
    });
  });
}

public login() {
  // Call the show method to display the widget.
  this.lock.show();
};

public authenticated() {
  // Check if there's an unexpired JWT
  // This searches for an item in localStorage with key == 'id_token'
  return tokenNotExpired();
};

public logout() {
  // Remove token from localStorage
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
};

}
