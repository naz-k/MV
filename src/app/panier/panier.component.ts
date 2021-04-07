import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  chariot$;
  constructor(private panierService: PanierService) { }

  async ngOnInit(): Promise<void> {
   this.chariot$ = await this.panierService.recupererPanier();
  }

  effacerPanier() {
    this.panierService.effacerPanier();
  }

}
