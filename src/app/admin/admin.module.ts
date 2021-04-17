import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { CommunModule } from 'app/commun/commun.module';
import { AuthGuardService } from 'app/commun/services/auth-guard.service';

import { AdminCommandesDetailsComponent } from './components/admin-commandes-details/admin-commandes-details.component';
import { AdminCommandesComponent } from './components/admin-commandes/admin-commandes.component';
import { AdminProduitsComponent } from './components/admin-produits/admin-produits.component';
import { ProduitFormulaireComponent } from './components/produit-formulaire/produit-formulaire.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';



@NgModule({
  declarations: [
    AdminProduitsComponent,
    AdminCommandesComponent,
    ProduitFormulaireComponent,
    AdminCommandesDetailsComponent
  ],
  imports: [
    BrowserModule,    
    CommunModule,   
    RouterModule.forChild([     
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
       { path: 'admin/commandes/:id',
        component: AdminCommandesDetailsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
       },
       { path: 'admin/commandes',
        component: AdminCommandesComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
       }
    ])
  ],
  exports: [
    AdminProduitsComponent,
    AdminCommandesComponent,
    ProduitFormulaireComponent
  ],
  providers: [
    AdminAuthGuardService 
  ]
})
export class AdminModule { }
