import { Produit } from "./produit";

export class PanierArticle {
    produit: Produit;
    quantite: number;

    constructor(init?: Partial<PanierArticle>) {
        Object.assign(this, init);
      }
}

