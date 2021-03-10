import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private bd: AngularFireDatabase) { }

  creer(produit){
   return this.bd.list('/produits').push(produit);
  }

  getListeProduits(){
    return this.bd.list('/produits').valueChanges();
     
  }
}
