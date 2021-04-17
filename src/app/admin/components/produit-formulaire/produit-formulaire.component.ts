import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'app/commun/services/categorie.service';
import { ProduitService } from 'app/commun/services/produit.service';
import { filter, take } from 'rxjs/operators';




@Component({
  selector: 'app-produit-formulaire',
  templateUrl: './produit-formulaire.component.html',
  styleUrls: ['./produit-formulaire.component.css']
})
export class ProduitFormulaireComponent implements OnInit {

  categories$;  
  produit:any = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categorieService: CategorieService, 
    private produitService: ProduitService) 
    { 
      this.categories$ = this.categorieService.getCategories();

      this. id = this.route.snapshot.paramMap.get('id');     
      if (this.id) {       
         this.produitService.getProduit(this.id).pipe(take(1)).subscribe(p => {
           this.produit = p;
           //console.log("TEST produit : ", this.produit);
         });
      }      
      
    }

  sauvegarder(produit){    
     if(this.id)  this.produitService.mettreAjour(this.id, produit);
     else this.produitService.creer(produit);

     this.router.navigate(['admin/produits']);
  }

  supprimer(){
    if(!confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) return;

      this.produitService.enlever(this.id);
      this.router.navigate(['admin/produits']);    
  }

  ngOnInit(): void {
  }

}
