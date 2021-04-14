import { PanierArticle } from "./panier-article";
import { Produit } from "./produit";

export class Panier {
   articles: PanierArticle[] = [];

   constructor(private mapArticles: { [idProduit: string]: PanierArticle }){
       this.mapArticles = mapArticles || {};
       
       for (let idProduit in mapArticles) {
            let article = mapArticles[idProduit];            
            //Operateur spread(...) de Type script, ... itereate tous les proprietes d'article et les ajoutent ici.
            this.articles.push(new PanierArticle({ ...article, key: idProduit }));
           
       }
          
   }
   
    recupererQuantite(produit: Produit) {   
        //console.log("TEST_produit : ", produit);     
        let article = this.mapArticles[produit.key];        
        return article ? article.quantite : 0;
      }    

    get prixTotal() {
        let totale = 0;
        for (let idProduit in this.articles)
            totale += this.articles[idProduit].prixTotal;
        return totale;
    }

    get nbrTotalArticles() {
       let nbr = 0;
        for (let idProduit in this.articles) {                   
            nbr += this.articles[idProduit].quantite;            
        }
        return nbr;
    }
}

 