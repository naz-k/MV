import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private bd: AngularFireDatabase) { }

  getCategories(){
    return this.bd.list('/categories', ref => ref.orderByChild('nom')).valueChanges();
  }
}
