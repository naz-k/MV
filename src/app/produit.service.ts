import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private afDB: AngularFireDatabase) { }

  creer(produit){
   return this.afDB.list('/produits').push(produit);
  }

  getListeProduits(){
    return this.afDB.list('/produits');
     
  }
}
