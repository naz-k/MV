import { PanierArticle } from "./panier-article";

export class Panier {
    articles: PanierArticle[] = [];

    constructor(donnees?: Partial<Panier>) {
        Object.assign(this, donnees);
      }

    get nbrTotalArticles() {
       let nbr = 0;
        for (let idProduit in this.articles) {                   
            nbr += this.articles[idProduit].quantite;            
        }
        return nbr;
    }
}