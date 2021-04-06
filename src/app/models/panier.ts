import { PanierArticle } from "./panier-article";
import { Produit } from "./produit";

export class Panier {
   articles: PanierArticle[] = [];

   constructor(public mapArticles: { [idProduit: string]: PanierArticle }){
       this.mapArticles = mapArticles || {};
       
       for (const idProduit in mapArticles) {
            const article = mapArticles[idProduit];
            this.articles.push(new PanierArticle({produit: article.produit, quantite: article.quantite}));
       }
          
   }
     // pour le utiliser apres: 
    // constructor(donnees?: Partial<Panier> ) {
    //     Object.assign(this, donnees);
    // }

    recupererQuantite(produit: Produit) {   
        console.log("TEST_produit : ", produit);     
        let article = this.mapArticles[produit.key];        
        return article ? article.quantite : 0;
      }
    
    
    get idsDesProduits(){
        return Object.keys(this.articles)
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