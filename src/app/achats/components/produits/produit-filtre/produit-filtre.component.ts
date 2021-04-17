import { Component, Input, OnInit } from '@angular/core';
import { CategorieService } from 'app/commun/services/categorie.service';

@Component({
  selector: 'produit-filtre',
  templateUrl: './produit-filtre.component.html',
  styleUrls: ['./produit-filtre.component.css']
})
export class ProduitFiltreComponent implements OnInit {

  categories$;
  @Input('categorie') categorie;

  constructor(
    categorieService: CategorieService ) { 
    this.categories$ = categorieService.getCategories();
  }

  ngOnInit(): void {
  }

}
