import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-commande-reussie',
  templateUrl: './commande-reussie.component.html',
  styleUrls: ['./commande-reussie.component.css']
})
export class CommandeReussieComponent implements OnInit {
  stripe;
  totalAmount = 1;//valeur a chercher du prix total dans panier

  constructor(private fonctions: AngularFireFunctions) {}

  ngOnInit(): void {
  }

  async payer() {
    this.stripe = await loadStripe(
      'pk_test_51IamYLIqWBixaGHOcoGty4i9jMLzSMKqflNpMd32HZB1yTPQFnNuNEet45Sq6AlIpFMsfeFuVzQxlCejsq7JYCs000k8IlTlxd'
    );
    const creerSessionPaiement = this.fonctions.httpsCallable('creerSessionPaiement');
    creerSessionPaiement({
      product_name: 'Produits Bio',
      quantity: 1,
      unit_amount: this.totalAmount
    })
      .toPromise()
      .then((sessionId: string) => this.stripe.redirectToCheckout({sessionId}))
      .catch((e) => console.log('Erreur lors du paiement', e))
  }

}
