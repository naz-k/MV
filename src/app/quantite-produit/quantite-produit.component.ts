import { Component, Input, OnInit } from '@angular/core';
import { Panier } from '../models/panier';
import { Produit } from '../models/produit';
import { PanierService } from '../panier.service';

@Component({
  selector: 'quantite-produit',
  templateUrl: './quantite-produit.component.html',
  styleUrls: ['./quantite-produit.component.css']
})
export class QuantiteProduitComponent  { 

  
  
  @Input('produit') produit: Produit;  
  @Input('panier') panier: Panier;

  constructor(private panierService: PanierService) { }

  ajouterAuPanier() {
    this.panierService.ajouterAuPanier(this.produit);  
    //console.log("this.produit ",this.produit);  
  }

  retirerDuPanier() {
    this.panierService.retirerDuPanier(this.produit);
  }

  
  

}
