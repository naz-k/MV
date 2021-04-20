import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommunModule } from 'app/commun/commun.module';
import { AuthGuardService } from 'app/commun/services/auth-guard.service';

import { CommandeReussieComponent } from './components/commande-reussie/commande-reussie.component';
import { FormulaireLivraisonComponent } from './components/formulaire-livraison/formulaire-livraison.component';
import { MesCommandesComponent } from './components/mes-commandes/mes-commandes.component';
import { PanierComponent } from './components/panier/panier.component';
import { ProduitFiltreComponent } from './components/produits/produit-filtre/produit-filtre.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { ResumePanierComponent } from './components/resume-panier/resume-panier.component';
import { VerificationComponent } from './components/verification/verification.component';



@NgModule({
  declarations: [
    ProduitsComponent,
    PanierComponent,
    VerificationComponent,
    CommandeReussieComponent,
    MesCommandesComponent,   
    ProduitFiltreComponent,    
    ResumePanierComponent,
    FormulaireLivraisonComponent,
  ],
  imports: [
    BrowserModule,    
    CommunModule,   
    
    AngularFireFunctionsModule,

    RouterModule.forChild([
      { path: 'produits', component: ProduitsComponent },
      { path: 'panier', component: PanierComponent },
      { path: 'verification', component: VerificationComponent, canActivate: [AuthGuardService] },
      { path: 'commande-reussie/:id', component: CommandeReussieComponent, canActivate: [AuthGuardService] },
      { path: 'mes/commandes', component: MesCommandesComponent, canActivate: [AuthGuardService] }      
    ])
  ],
})
export class AchatsModule { }
