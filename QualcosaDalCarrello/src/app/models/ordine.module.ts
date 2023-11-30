import { Carrello } from "./carrello.module";

export interface Ordine {
    id: number;
    carrello: Carrello;
    utente: "UtenteComponent";

}