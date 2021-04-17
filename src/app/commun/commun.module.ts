import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { CustomFormsModule } from 'ng2-validation';

import { CatalogueProduitsComponent } from './components/catalogue-produits/catalogue-produits.component';
import { QuantiteProduitComponent } from './components/quantite-produit/quantite-produit.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategorieService } from './services/categorie.service';
import { CommandeService } from './services/commande.service';
import { PanierService } from './services/panier.service';
import { ProduitService } from './services/produit.service';
import { UsagerService } from './services/usager.service';



@NgModule({
  declarations: [
    CatalogueProduitsComponent,
    QuantiteProduitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  exports: [
    CatalogueProduitsComponent,
    QuantiteProduitComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UsagerService,    
    CategorieService,
    ProduitService,
    PanierService,
    CommandeService
  ]
})
export class CommunModule { }
