import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent  {

  livraison: any = {};

  passerCommande() {
    console.log(this.livraison);
  }

}
