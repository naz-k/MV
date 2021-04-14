import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  constructor(private bd: AngularFireDatabase) { }

  stockerCommande(commande) {
    return this.bd.list('/commandes').push(commande);
  }
}
