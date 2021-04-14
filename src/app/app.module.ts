import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from "angular-datatables";


import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { VerificationComponent } from './verification/verification.component';
import { CommandeReussieComponent } from './commande-reussie/commande-reussie.component';
import { MesCommandesComponent } from './mes-commandes/mes-commandes.component';
import { AdminProduitsComponent } from './admin/admin-produits/admin-produits.component';
import { AdminCommandesComponent } from './admin/admin-commandes/admin-commandes.component';
import { ConnexionComponent } from './connexion/connexion.component';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UsagerService } from './usager.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProduitFormulaireComponent } from './admin/produit-formulaire/produit-formulaire.component';
import { CategorieService } from './categorie.service';
import { ProduitService } from './produit.service';
import { ProduitFiltreComponent } from './produits/produit-filtre/produit-filtre.component';
import { CatalogueProduitsComponent } from './catalogue-produits/catalogue-produits.component';
import { QuantiteProduitComponent } from './quantite-produit/quantite-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProduitsComponent,
    PanierComponent,
    VerificationComponent,
    CommandeReussieComponent,
    MesCommandesComponent,
    AdminProduitsComponent,
    AdminCommandesComponent,
    ConnexionComponent,
    ProduitFormulaireComponent,
    ProduitFiltreComponent,
    CatalogueProduitsComponent,
    QuantiteProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,  
    DataTablesModule, 
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,    
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: ProduitsComponent },
      { path: 'produits', component: ProduitsComponent },
      { path: 'panier', component: PanierComponent },
      { path: 'connexion', component: ConnexionComponent },
      
      { path: 'verification', component: VerificationComponent, canActivate: [AuthGuardService] },
      { path: 'commande-reussie/:id', component: CommandeReussieComponent, canActivate: [AuthGuardService] },
      { path: 'mes/commandes', component: MesCommandesComponent, canActivate: [AuthGuardService] },
      
      
       { path: 'admin/produits/nouveau',
        component: ProduitFormulaireComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
       },
       { path: 'admin/produits/:id',
        component: ProduitFormulaireComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
       },
       { path: 'admin/produits',
        component: AdminProduitsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
       },
       { path: 'admin/commandes',
        component: AdminCommandesComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
       }
    ])
  ],
  providers: [
    /*AuthService,
    AuthGuardService,
    UsagerService,
    AdminAuthGuardService,
    CategorieService,*/
    //ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
