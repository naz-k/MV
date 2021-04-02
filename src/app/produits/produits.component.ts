import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { Produit } from '../models/produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

  produits: Produit[] = [];
  categories$;
  categorie: string;
  produitsFiltres: Produit[] = [];

  constructor(
    route: ActivatedRoute,
    produitService: ProduitService, 
    categorieService: CategorieService) {

    produitService.getListeProduits().subscribe(produits => this.produits = produits);
    
    this.categories$ = categorieService.getCategories();

    route.queryParamMap.subscribe(params => {
      this.categorie = params.get('categorie');

      // mettre produits filtres
      this.produitsFiltres = (this.categorie) ?
         this.produits.filter(p => p.categorie === this.categorie) :
         this.produits;
    });
   }

  

}
