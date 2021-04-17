import { Component } from '@angular/core';
import { AuthService } from '../../../commun/services/auth.service';




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
 
  constructor(private auth: AuthService) {      
       
  }  

  seconnecter(){
    this.auth.seconnecter();
  }

}
