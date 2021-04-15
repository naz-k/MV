import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeService } from 'src/app/commande.service';
import { Commande } from 'src/app/models/commande';

@Component({
  selector: 'app-admin-commandes',
  templateUrl: './admin-commandes.component.html',
  styleUrls: ['./admin-commandes.component.css']
})
export class AdminCommandesComponent  {
  commandes$;

  constructor(private commandeService: CommandeService) {
    this.commandes$ = commandeService.recupererCommandes();
    console.log(this.commandes$);
   }

  
}
