import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private bd: AngularFireDatabase) { }

  create(){
    return this.bd.list('/panier').push({
      dateCree: new Date().getTime()
    })
  }
}
