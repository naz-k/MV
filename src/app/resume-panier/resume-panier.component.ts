import { Component, Input, OnInit } from '@angular/core';
import { Panier } from '../models/panier';

@Component({
  selector: 'resume-panier',
  templateUrl: './resume-panier.component.html',
  styleUrls: ['./resume-panier.component.css']
})
export class ResumePanierComponent  {

  @Input('panier') panier: Panier;

  

}
