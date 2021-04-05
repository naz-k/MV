import { PanierArticle } from "./panier-article";

export interface Panier {
    [x: string]: any;
    articles: PanierArticle[];
}