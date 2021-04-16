import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Commande } from './models/commande';
import { PanierService } from './panier.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  idUsager: string;
  

  constructor(private bd: AngularFireDatabase, private panierService: PanierService) { }


  async passerCommande(commande) {
    let resultat = await this.bd.list('/commandes').push(commande);
    this.panierService.effacerPanier(); // effacer les articles dans le panier mettre le chiffre sur l'icone panier a 0.
    return resultat;
  }

  recupererCommandes() {
    return this.bd.list<Commande>('/commandes').valueChanges();
  }


  // recupererCommandeParId(idCommande: string) {
  //   return this.bd.list('/commandes', ref => {
  //     //console.log(ref.orderByChild("key").equalTo(idCommande));

  //   // ref.orderByChild('idUsager')
  //   // console.log(ref);
  //   return ref.orderByChild("idCommande").equalTo(idCommande).valueChanges();
  //  });
  // }

  recupererCommandeParIdUsager(idUsager: string) {   
    //console.log(idUsager);
    this.idUsager = idUsager; 
    return this.bd.list('/commandes', ref => {      
      return ref.orderByChild('idUsager').equalTo(idUsager);
    }).snapshotChanges().pipe(
      map((commandes: any) => commandes.map(prod => {
        const payload = prod.payload.val();
        //console.log(payload);
        const key = prod.key;
        return <Commande>{key, ...payload};
      })),
    );   
  }
  

}
