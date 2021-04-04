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
  @Input('panier') panier;

  constructor(private panierService: PanierService) { }

  ajouterAuPanier(produit: Produit) {
    this.panierService.ajouterAuPanier(produit);
    
  }

  recupererQuantite() {
    console.log("TEST-23 ", this.panier['articles'+this.produit.key]);
    if (!this.panier) return 0;

    // let article = this.panier.articles[this.produit.key];
    let article = this.panier['articles'+this.produit.key];
    console.log("TEST-27 ", article);
    return article ? article.quantite : 0;
  }

}
