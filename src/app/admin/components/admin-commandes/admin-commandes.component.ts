import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'app/commun/services/commande.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-commandes',
  templateUrl: './admin-commandes.component.html',
  styleUrls: ['./admin-commandes.component.css']
})
export class AdminCommandesComponent  {
  commandes$;

  constructor(private commandeService: CommandeService) {
    this.commandes$ = this.commandeService.recupererCommandes();
    //console.log(this.commandes$);
   }

  
}
