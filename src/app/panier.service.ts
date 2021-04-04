import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Produit } from './models/produit';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(
    private bd: AngularFireDatabase
    ) { }

  private creer(){
    return this.bd.list('/panier').push({
      dateCree: new Date().getTime()
    })
  }

  private recupererPanier(idPanier: string){
    return this.bd.object('/panier/'+idPanier);
  }

  private recupererArticle(idPanier: string, idProduit: string) {
    return this.bd.object('/panier/'+ idPanier + '/articles' + idProduit);
  }

  private async recupererOuCreerPanierId() { // async c'est pour utiliser await
    let idPanier = localStorage.getItem('idPanier');
    if (idPanier) return idPanier;
    
    let resultat = await this.creer(); // Avec await on peut convoquer methode asyncron methode syncron
    localStorage.setItem('idPanier', resultat.key);
    return resultat.key;      
  }

  async ajouterAuPanier(produit: Produit) {   
    let idPanier = await this.recupererOuCreerPanierId();
    let article$ = this.recupererArticle(idPanier, produit.key);
    article$.snapshotChanges().pipe(take(1)).subscribe(article =>{
      if(article.payload.exists()) {
        article$.update({quantite: article.payload.exportVal().quantite + 1 });
      } else {
        article$.set({ produit: produit, quantite: 1 });   
      }
      
    });

  }
}
