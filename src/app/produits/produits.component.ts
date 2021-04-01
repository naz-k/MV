import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../categorie.service';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {

  produits$;
  categories$;

  constructor(
    route: ActivatedRoute,
    produitService: ProduitService, 
    categorieService: CategorieService) {

    this.produits$ = produitService.getListeProduits();
    this.categories$ = categorieService.getCategories();
   }

  

}
