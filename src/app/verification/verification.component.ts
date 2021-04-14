import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommandeService } from '../commande.service';
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
  subscription: Subscription;

  constructor(
    private commandeService: CommandeService,
    private panierService: PanierService) {}

  async ngOnInit() {
    let panier$ = await this.panierService.recupererPanier();
    this.subscription = panier$.subscribe(panier => this.panier = panier);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  passerCommande() {
    //console.log(this.livraison);
    let commande = {
      dateCommande: new Date().getTime(),
      livraison: this.livraison,
      articles: this.panier.articles.map( a => {
        return {
          produit: {
            titre: a.titre,
            imageUrl: a.imageUrl,
            prix: a.prix
          },
          quantite: a.quantite,
          prixTotal: a.prixTotal
        }
      })
    };

    this.commandeService.stockerCommande(commande);
  }

}
