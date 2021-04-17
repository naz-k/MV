import { Produit } from "./produit";

export class PanierArticle {
    key: string;
    titre: string;
    imageUrl: string;
    prix: number;
    quantite: number;

    // produit: Produit;
    // quantite: number;

    constructor(donnees?: Partial<PanierArticle>) {
        Object.assign(this, donnees);
    }
    // /constructor(public produit: Produit, public quantite: number){}


    get prixTotal(){
        return this.prix * this.quantite; 
        // return this.produit.prix * this.quantite;
    }

}

