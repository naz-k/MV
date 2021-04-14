import { Panier } from "./panier";

export class Commande {
    dateCommande: number;
    articles: any[];

    constructor(public idUsager: string, public livraison: any, panier: Panier) {
        this.dateCommande = new Date().getTime();

        this.articles = panier.articles.map( a => {
            return {
              produit: {
                titre: a.titre,
                imageUrl: a.imageUrl,
                prix: a.prix
              },
              quantite: a.quantite,
              prixTotal: a.prixTotal
            }
          })
    }

}