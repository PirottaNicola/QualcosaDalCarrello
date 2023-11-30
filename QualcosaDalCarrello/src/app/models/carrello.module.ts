import { Prodotto } from "./prodotto.module";

export interface Carrello {
    id: number;
    prodotti: Prodotto[];
    utente: "UtenteComponent()";
    prezzoTotale: number;

}