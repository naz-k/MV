import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './commun/services/auth.service';
import { Router } from '@angular/router';
import { UsagerService } from './commun/services/usager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  constructor(private usagerService: UsagerService, private auth: AuthService, router: Router) {
    this.auth.user$.subscribe(user => {
      if (!user) return;

      this.usagerService.sauvegarder(user);
        
      let returnUrl = localStorage.getItem('returnUrl');
      if(!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);      
    })
  }
}
