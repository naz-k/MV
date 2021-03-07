import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUsager } from '../models/app-usager';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {  
  appUsager: AppUsager;

  constructor(private auth: AuthService) {  
    auth.appUsager$.subscribe(appUsager => this.appUsager = appUsager);      
   }

  sedeconnecter(){
     this.auth.sedeconnecter();
  }
 

}
