import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-admin-produits',
  templateUrl: './admin-produits.component.html',
  styleUrls: ['./admin-produits.component.css']
})
export class AdminProduitsComponent implements OnInit, OnDestroy {
  
  produits: Produit[];
  produitsFiltres: Produit[];
  subscription: Subscription;

  constructor(private produitService: ProduitService) {
    this.subscription = this.produitService.getListeProduits()
    .subscribe(produits => this.produitsFiltres = this.produits = produits);
   
   }


  filtrer(demande: string){
    if(demande){
      this.produitsFiltres = this.produits.filter(p => p.titre.toLowerCase().includes(demande.toLowerCase()));
     // console.log("this.produitsFiltres : ", this.produitsFiltres[0].titre);
    }else{
      this.produitsFiltres = this.produits;
    } 
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }   

  ngOnInit(): void {
  }



}
