import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommunModule } from 'app/commun/commun.module';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,     
    ConnexionComponent
  ],
  imports: [
    CommunModule,
    RouterModule.forChild([])
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class NoyauModule { }
