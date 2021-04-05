import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Produit } from './models/produit';
import { map, take } from 'rxjs/operators';
import { Panier } from './models/panier';
import { Observable } from 'rxjs';
import { PanierArticle } from './models/panier-article';

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

 

  async recupererPanier(): Promise<Observable<Panier>> {
    let idPanier = await this.recupererOuCreerPanierId();
    return this.bd.object('/panier/'+idPanier)
    .valueChanges()
    .pipe(map( (x: { articles: { [idProduit: string]: PanierArticle }}) => {
      console.log('test-x.articles :',x.articles);
      return new Panier(x.articles);
     }));
    // .pipe(map( (x:any) => new Panier(x.articles) )
    // );

  }

  private recupererArticle(idPanier: string, idProduit: string) {
    return this.bd.object('/panier/'+ idPanier + '/articles/' + idProduit);
  }

  private async recupererOuCreerPanierId(): Promise<string> { // async c'est pour utiliser await
    let idPanier = localStorage.getItem('idPanier');
    if (idPanier) return idPanier;
    
    let resultat = await this.creer(); // Avec await on peut convoquer methode asyncron methode syncron
    //console.log('resultat.key', resultat.key);
    localStorage.setItem('idPanier', resultat.key);
    return resultat.key;      
  }

  async ajouterAuPanier(produit: Produit) {   
    this.mettreAJourQuantiteArticle(produit, 1);
  }

  async retirerDuPanier(produit: Produit) {
     this.mettreAJourQuantiteArticle(produit, -1);
  }

  private async mettreAJourQuantiteArticle(produit: Produit, changer: number) {
    let idPanier = await this.recupererOuCreerPanierId();
    let article$ = this.recupererArticle(idPanier, produit.key);
    article$.snapshotChanges().pipe(take(1)).subscribe(article =>{
      //console.log('article', article);
      if(article.payload.exists()) {
        //console.log('articleQ', article.payload.exportVal().quantite);
        article$.update({quantite: article.payload.exportVal().quantite + changer });
      } else {
        article$.set({ produit: produit, quantite: 1 });   
      }
      
    });  
  }


}
