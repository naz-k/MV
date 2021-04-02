import { Component, Input } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'catalogue-produits',
  templateUrl: './catalogue-produits.component.html',
  styleUrls: ['./catalogue-produits.component.css']
})
export class CatalogueProduitsComponent {
  @Input('produit') produit: Produit;
  @Input('show-actions') showActions = true;

  constructor() { }

 

}
