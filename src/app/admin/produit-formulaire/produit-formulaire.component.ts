import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/categorie.service';
import { ProduitService } from 'src/app/produit.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-produit-formulaire',
  templateUrl: './produit-formulaire.component.html',
  styleUrls: ['./produit-formulaire.component.css']
})
export class ProduitFormulaireComponent implements OnInit {
  categories$;

  constructor(categorieService: CategorieService, private produitService: ProduitService) { 
    this.categories$ = categorieService.getCategories();
  }

  sauvegarder(produit){
     //console.log(produit);
     this.produitService.creer(produit);
  }

  ngOnInit(): void {
  }

}
