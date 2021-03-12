import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private db: AngularFireDatabase) { }

  creer(produit){
   return this.db.list('/produits').push(produit);
  }

  getListeProduits(){
    return this.db.list('/produits');
     
  }

  getProduit(produitId){
    return this.db.object('/produits/'+ produitId).valueChanges();
  }

  mettreAjour(produitId, produit) {
    return this.db.object('/produits/'+produitId).update(produit);
  }

  enlever(produitId){
    return this.db.object('/produits/' + produitId).remove();
  }
}
