import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from 'src/app/models/produit';
import { DatatableLanguage } from 'src/francais';

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
