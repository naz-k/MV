import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/categorie.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-produit-formulaire',
  templateUrl: './produit-formulaire.component.html',
  styleUrls: ['./produit-formulaire.component.css']
})
export class ProduitFormulaireComponent implements OnInit {
  categories$;//: Observable<any[]>;

  constructor(categorieService: CategorieService) { 
    this.categories$ = categorieService.getCategories();
  }

  ngOnInit(): void {
  }

}
