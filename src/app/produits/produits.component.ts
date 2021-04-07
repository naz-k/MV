import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../produit.service';
import { switchMap } from 'rxjs/operators';
import { PanierService } from '../panier.service';
import { Observable, Subscription } from 'rxjs';
import { Panier } from '../models/panier';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  produits: Produit[] = [];
  produitsFiltres: Produit[] = []; 
  categorie: string;
  chariot$: Observable<Panier>;
 
  

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService, 
    private panierservice: PanierService
    ) {      

    
   }


  async ngOnInit() {
    this.chariot$ = await this.panierservice.recupererPanier();  
     this.assignerProduits();
  }

  private assignerProduits(){    
    this.produitService
      .getListeProduits()
      .pipe(switchMap(produits => {
        this.produits = produits; 
        return this.route.queryParamMap;
    })) 
    .subscribe(params => {
      this.categorie = params.get('categorie');

      // mettre produits filtres
      this.appliquerFiltres();
    });   
  }

  private appliquerFiltres(){
     // mettre produits filtres
     this.produitsFiltres = (this.categorie) ?
     this.produits.filter(p => p.categorie === this.categorie) :
     this.produits;
  }

  
  

}
