import { Component, Input } from '@angular/core';
import { Produit } from '../models/produit';
import { PanierService } from '../panier.service';

@Component({
  selector: 'catalogue-produits',
  templateUrl: './catalogue-produits.component.html',
  styleUrls: ['./catalogue-produits.component.css']
})
export class CatalogueProduitsComponent {
  @Input('produit') produit: Produit;
  @Input('show-actions') showActions = true;

  constructor(private panierService: PanierService) { }

  ajouterAuPanier(produit: Produit) {
    //this.panierService.ajouterAupanier(produit);
    
  }

 

}
