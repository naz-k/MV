import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  constructor(private bd: AngularFireDatabase, private panierService: PanierService) { }

  async passerCommande(commande) {
    let resultat = await this.bd.list('/commandes').push(commande);
    this.panierService.effacerPanier(); // effacer les articles dans le panier mettre le chiffre sur l'icone panier a 0.
    return resultat;
  }
}
