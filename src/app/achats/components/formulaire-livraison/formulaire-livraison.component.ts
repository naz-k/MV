import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../commun/services/auth.service';
import { CommandeService } from '../../../commun/services/commande.service';
import { Commande } from '../../../commun/models/commande';
import { Panier } from '../../../commun/models/panier';

import { loadStripe } from '@stripe/stripe-js';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';

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
  estPaye = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private commandeService: CommandeService,
    private fonctions: AngularFireFunctions,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //uid: est un identifiant unique que Firebase consacre a chaque usager.
    this.usagerSubscription = this.authService.user$.subscribe(usager => this.idUsager = usager.uid);

    this.estPaye = this.verifierEtatPaiement();
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

  verifierEtatPaiement(): boolean {
    var paiementComplete = false;
    let etatPaiement = this.activatedRoute.snapshot.queryParamMap.get('etat');
    if (etatPaiement == 'succes')
      paiementComplete = true;
    return paiementComplete; 
  }

  async payer() {
    let stripe = await loadStripe(environment.stripe.testKey);
    const creerSessionPaiement = this.fonctions.httpsCallable('creerSessionPaiement');
    var montantTaxe = this.panier.prixTotal * 0.15;
    var prixAvecTaxe = this.panier.prixTotal + montantTaxe;
    creerSessionPaiement({
      nom: 'Produits Bio',
      prix: prixAvecTaxe
    })
      .toPromise()
      .then((sessionId: string) => {
        stripe.redirectToCheckout({ sessionId })
      })
      .catch((e) => console.log('Erreur lors du paiement', e))
  }

}
