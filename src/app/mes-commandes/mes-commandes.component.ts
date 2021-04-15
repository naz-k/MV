import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.css']
})
export class MesCommandesComponent  {
  commandes$;

  constructor(
    private authService: AuthService,
    private commandeService: CommandeService) {

    // this.commandes$ = authService.user$.pipe(
    //   switchMap(u => commandeService.recupererCommandeAvecUsager(u.uid)));
    }  
  

}
