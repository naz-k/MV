import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produit } from 'app/commun/models/produit';
import { ProduitService } from 'app/commun/services/produit.service';
import { DatatableLanguage } from 'francais';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-produits',
  templateUrl: './admin-produits.component.html',
  styleUrls: ['./admin-produits.component.css']
})
export class AdminProduitsComponent implements OnInit, OnDestroy {  
  
  produits: Produit[];
  produitsFiltres: Produit[]=[];
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private produitService: ProduitService) {
    this.dtOptions = {
      language : DatatableLanguage.datatableFrench,
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.subscription = this.produitService.getListeProduits()
    .subscribe(produits => {
      this.produitsFiltres = this.produits = produits;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
   
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
    this.dtTrigger.unsubscribe();
  }   

  ngOnInit(): void {
  }



}
