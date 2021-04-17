import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'app/commun/services/commande.service';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'admin-commandes-details',
  templateUrl: './admin-commandes-details.component.html',
  styleUrls: ['./admin-commandes-details.component.css']
})
export class AdminCommandesDetailsComponent implements OnDestroy  {

  commandes$: Observable<any[]>;  
  id;  
  commandeClient: Observable<any>;
  commandeArticles;
  commande;
  total: number=0;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private commandeService: CommandeService
    ) {
    this.commandes$ = commandeService.recupererCommandes();
    //console.log(this.commandes$);
    this.id = this.route.snapshot.paramMap.get('id');
    this.commandeClient = this.commandeService.recupererCommandeParIdUsager(this.id);
    this.subscription = this.commandeClient.subscribe(c => {
      this.commande = c;
      //console.log(c);
      this.commandeArticles = c[0].articles;
      //console.log(c[0].articles); 
      
      for (let article of c[0].articles){
        this.total = this.total + article.prixTotal;
      }
      //console.log(this.total);
           
    });
   }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  
}
