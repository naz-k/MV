import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { environment } from 'environments/environment';

import { AchatsModule } from './achats/achats.module';
import { ProduitsComponent } from './achats/components/produits/produits.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunModule } from './commun/commun.module';
import { ConnexionComponent } from './noyau/components/connexion/connexion.component';
import { NoyauModule } from './noyau/noyau.module';




@NgModule({
  declarations: [
    AppComponent      
  ],
  imports: [
    BrowserModule,
    CommunModule,
    AdminModule,
    AchatsModule,
    NoyauModule,    
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebase),      
    RouterModule.forRoot([
      { path: '', component: ProduitsComponent },      
      { path: 'connexion', component: ConnexionComponent }       
    ])
  ],
  providers: [         
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
