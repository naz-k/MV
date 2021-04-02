import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../produit.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

  produits: Produit[] = [];
  produitsFiltres: Produit[] = []; 
  categorie: string;
  

  constructor(
    route: ActivatedRoute,
    produitService: ProduitService, 
    ) {

    produitService
      .getListeProduits()
      .pipe(switchMap(produits => {
        this.produits = produits; 
        return route.queryParamMap;
      })) 
      .subscribe(params => {
        this.categorie = params.get('categorie');

        // mettre produits filtres
        this.produitsFiltres = (this.categorie) ?
          this.produits.filter(p => p.categorie === this.categorie) :
          this.produits;
      });     

    

   }

  

}
