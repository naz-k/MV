import { Component, Input } from '@angular/core';
import { Panier } from '../models/panier';
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
  @Input('panier') panier: Panier;

  constructor(private panierService: PanierService) { }

  ajouterAuPanier() {
    this.panierService.ajouterAuPanier(this.produit);  
    //console.log(this.produit);  //ok
  }

  
}
