import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from '../models/panier';
import { PanierService } from '../panier.service';

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
