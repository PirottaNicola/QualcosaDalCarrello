import { Prodotto } from "./prodotto.module";
import { Utente } from "./utente.module";

export interface Carrello {
    id: number;
    prodotti: Prodotto[];
    utente: Utente;
    prezzoTotale: number;

}
function sommaPrezzo(prodotti: Prodotto[]): number {
    let totale: number = 0;
    if (prodotti.length > 0) {
        for (let prodotto of prodotti) {
            totale += prodotto.prezzo;
        }
    }
    return totale;
}