import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { CommandeService } from '../commande.service';
import { Commande } from '../models/commande';
import { Panier } from '../models/panier';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit, OnDestroy {

  livraison: any = {};
  panier: Panier;
  idUsager: string;
  panierSubscription: Subscription;
  usagerSubscription: Subscription;
  

  constructor(
    private authService: AuthService,
    private commandeService: CommandeService,
    private panierService: PanierService) {}

  async ngOnInit() {
    let panier$ = await this.panierService.recupererPanier();
    this.panierSubscription = panier$.subscribe(panier => this.panier = panier);
    //uid: est un identifiant unique que Firebase consacre a chaque usager.
    this.authService.user$.subscribe(usager => this.idUsager = usager.uid)  
  }

  ngOnDestroy() {
    this.panierSubscription.unsubscribe();
    this.usagerSubscription.unsubscribe();
  }

  passerCommande() {
    let commande = new Commande(this.idUsager, this.livraison, this.panier);
    //console.log(this.livraison);

    this.commandeService.stockerCommande(commande);
  }

}
