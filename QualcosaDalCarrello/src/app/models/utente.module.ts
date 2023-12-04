import { Injectable } from "@angular/core";
import { Carrello } from "./carrello.module";
import { Ordine } from "./ordine.module";
export interface Utente {
    id: number;
    nome: string;
    cognome: string;
    indirizzi: string[];
    metodiPagamento: string[];
    storicoOrdini: Ordine[];
    carrelloCorrente: Carrello;
}

