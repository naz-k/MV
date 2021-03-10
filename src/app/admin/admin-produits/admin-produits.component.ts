import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-admin-produits',
  templateUrl: './admin-produits.component.html',
  styleUrls: ['./admin-produits.component.css']
})
export class AdminProduitsComponent implements OnInit {
  produits$;

  constructor(private produitService: ProduitService) {
    this.produits$ = this.produitService.getListeProduits();
   }

  ngOnInit(): void {
  }



}
