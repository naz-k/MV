import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

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

  private async recupererOuCreerPanier() { // async c'est pour utiliser await
    let idPanier = localStorage.getItem('idPanier');
    if(!idPanier){
      let resultat = await this.creer(); // Avec await on peut convoquer methode asyncron methode syncron
      localStorage.setItem('idPanier', resultat.key);
      return this.recupererPanier(resultat.key); 
    } 

    return this.recupererPanier(idPanier);    
  }
}
