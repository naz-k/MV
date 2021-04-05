import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../produit.service';
import { switchMap } from 'rxjs/operators';
import { PanierService } from '../panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit, OnDestroy{

  produits: Produit[] = [];
  produitsFiltres: Produit[] = []; 
  categorie: string;
  chariot: any;
  subscription: Subscription;
  

  constructor(
    route: ActivatedRoute,
    produitService: ProduitService, 
    private panierservice: PanierService
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


  async ngOnInit() {
    this.subscription = (await (await this.panierservice.recupererPanier()).valueChanges())
      .subscribe(chariot => this.chariot = chariot);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  

}
