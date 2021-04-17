import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
//import 'rxjs/add/observable/of';
import { of } from 'rxjs';
import { AppUsager } from '../models/app-usager';
import { UsagerService } from './usager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private usagerService: UsagerService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }

  seconnecter(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  sedeconnecter(){
    this.afAuth.signOut();
  }
  
    get appUsager$() : Observable<AppUsager> {
    return this.user$.pipe(
           switchMap(usager => {
               if (usager) return this.usagerService.get(usager.uid).valueChanges();
               return of(null);
               }
            )
      );
  }





}


