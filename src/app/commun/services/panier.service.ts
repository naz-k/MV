import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Produit } from '../models/produit';
import { map, take } from 'rxjs/operators';
import { Panier } from '../models/panier';
import { Observable } from 'rxjs';
import { PanierArticle } from '../models/panier-article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {  

  constructor(
    private bd: AngularFireDatabase
    ) { }
  
  async recupererPanier(): Promise<Observable<Panier>> {
    let idPanier = await this.recupererOuCreerPanierId();
    return this.bd.object('/panier/'+idPanier)
    .valueChanges()
    .pipe(map( (x: { articles: { [idProduit: string]: PanierArticle }}) => {
      //console.log('test-x.articles :',x.articles);
      return new Panier(x.articles);
      }));
  }

  async ajouterAuPanier(produit: Produit) {   
    this.mettreAJourArticle(produit, 1);
  }

  async retirerDuPanier(produit: Produit) {
      this.mettreAJourArticle(produit, -1);
  }

  async effacerPanier() {
     let idPanier = await this.recupererOuCreerPanierId(); 
     this.bd.object('/panier/' + idPanier + '/articles').remove();
  }

  private creer(){
    return this.bd.list('/panier').push({
      dateCree: new Date().getTime()
    })
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

  private async mettreAJourArticle(produit: Produit, changer: number) {
    let idPanier = await this.recupererOuCreerPanierId();    
    let article$ = this.recupererArticle(idPanier, produit.key.valueOf());    
    article$.snapshotChanges().pipe(take(1)).subscribe(article =>{
      //console.log('TEST-article: ', article.payload.exportVal());
      if(article.payload.exists()) { 
        article$.update({
          titre: produit.titre,
          imageUrl: produit.imageUrl,
          prix: produit.prix,        
          quantite: (article.payload.exportVal().quantite || 0) + changer
        }); 
        let quantite = 0;
        quantite = (article.payload.exportVal().quantite || 0) + changer 
        //console.log("test quantite", quantite);
        if (quantite === 0) article$.remove();    
      } else {
        article$.update({
          titre: produit.titre,
          imageUrl: produit.imageUrl,
          prix: produit.prix,        
          quantite: 1
        });  
      }
           
    });  
  }

 


}




