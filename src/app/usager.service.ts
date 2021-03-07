import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import firebase from 'firebase/app';
import { AppUsager } from './models/app-usager';

@Injectable({
  providedIn: 'root'
})
export class UsagerService {

  constructor(private db: AngularFireDatabase) { }

  sauvegarder(usager: firebase.User){
    this.db.object('/users/' + usager.uid).update({
      name: usager.displayName,
      email: usager.email
    });
  }

  get(uid: string): AngularFireObject<AppUsager> {
    return this.db.object('/users/' + uid);
  }
}
