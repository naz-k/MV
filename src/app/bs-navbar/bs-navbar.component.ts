import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUsager } from '../models/app-usager';
import { Panier } from '../models/panier';
import { PanierService } from '../panier.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {  
  appUsager: AppUsager;
  // nombreArticlesPanier: number = 0;
  chariot$: Observable<Panier>;
  
  constructor(
    private auth: AuthService,
    private panierService: PanierService
    ) {  
           
   }
  

  sedeconnecter(){
     this.auth.sedeconnecter();
  }

  async ngOnInit(){
    this.auth.appUsager$.subscribe(appUsager => this.appUsager = appUsager); 

    this.chariot$ = (await this.panierService.recupererPanier());
    
  }
 

}


