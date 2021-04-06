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

  ajouterAuPanier() {
    this.panierService.ajouterAuPanier(this.produit);    
  }

  retirerDuPanier() {
    this.panierService.retirerDuPanier(this.produit);
  }

  recupererQuantite() {
    //console.log("TEST-26 ", this.panier.articles[this.produit.key]);
    if (!this.panier) return 0;
    
    let article = this.panier.articles[this.produit.key]
     // console.log("TEST-31 ", article);
    return article ? article.quantite : 0;
  }

}
