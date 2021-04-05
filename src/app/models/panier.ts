import { PanierArticle } from "./panier-article";

export class Panier {
   articles: PanierArticle[] = [];

   constructor(public mapArticles: { [idProduit: string]: PanierArticle }){
       this.mapArticles = mapArticles || {};
       
       for (const idProduit in mapArticles) {
            const article = mapArticles[idProduit];
            this.articles.push(new PanierArticle({produit: article.produit, quantite: article.quantite}));
       }
          
   }



    // constructor(donnees?: Partial<Panier> ) {
    //     Object.assign(this, donnees);
    // }
    
    get idsDesProduits(){
        return Object.keys(this.articles)
    }

    get nbrTotalArticles() {
       let nbr = 0;
        for (let idProduit in this.articles) {                   
            nbr += this.articles[idProduit].quantite;            
        }
        return nbr;
    }
}