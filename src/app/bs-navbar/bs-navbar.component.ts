import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUsager } from '../models/app-usager';
import { PanierService } from '../panier.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {  
  appUsager: AppUsager;
  nombreArticlesPanier: number = 0;

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

    let chariot$ = await this.panierService.recupererPanier();
    chariot$.valueChanges().subscribe(chariot => {
      //console.log('Test 32 : ', chariot);
      this.nombreArticlesPanier = 0;
      for (let idProduit in chariot) {                 
        if (!isNaN(chariot[idProduit].quantite)){            
          this.nombreArticlesPanier += chariot[idProduit].quantite;
        }      
      }
    });
  }
 

}
