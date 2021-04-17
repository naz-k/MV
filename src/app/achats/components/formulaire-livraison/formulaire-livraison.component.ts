import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../commun/services/auth.service';
import { CommandeService } from '../../../commun/services/commande.service';
import { Commande } from '../../../commun/models/commande';
import { Panier } from '../../../commun/models/panier';

@Component({
  selector: 'formulaire-livraison',
  templateUrl: './formulaire-livraison.component.html',
  styleUrls: ['./formulaire-livraison.component.css']
})
export class FormulaireLivraisonComponent implements OnInit, OnDestroy {
  @Input('panier') panier: Panier;
  livraison: any = {};
  usagerSubscription: Subscription;
  idUsager: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private commandeService: CommandeService,
    ) {}

  ngOnInit(): void {
     //uid: est un identifiant unique que Firebase consacre a chaque usager.
     this.usagerSubscription = this.authService.user$.subscribe(usager => this.idUsager = usager.uid);  
  }

  ngOnDestroy() {    
    this.usagerSubscription.unsubscribe();
  }

  async passerCommande() {
    let commande = new Commande(this.idUsager, this.livraison, this.panier);
    //console.log(this.livraison);

    let resultat = await this.commandeService.passerCommande(commande);
    //console.log(resultat, resultat.key);    
    this.router.navigate(['/commande-reussie', resultat.key]);
  }

}
