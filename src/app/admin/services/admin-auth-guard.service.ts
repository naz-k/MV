import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../commun/services/auth.service';
import { UsagerService } from '../../commun/services/usager.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private usagerService: UsagerService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUsager$.pipe(       
       map(appUsager => appUsager.estAdmin)
    )   
  }
}
