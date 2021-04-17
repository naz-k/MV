import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from '../../../commun/models/panier';
import { PanierService } from '../../../commun/services/panier.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {  
  panier$: Observable<Panier>;  
  
  constructor(private panierService: PanierService) {}

  async ngOnInit() {
    this.panier$ = await this.panierService.recupererPanier();
  }  

}
