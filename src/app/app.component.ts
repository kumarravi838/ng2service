import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  { name = 'Angular'; 

  constructor(private auth:AuthService){
    
  }

}
