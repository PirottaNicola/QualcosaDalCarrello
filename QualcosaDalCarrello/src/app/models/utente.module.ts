import { Ordine } from "./ordine.module";

export interface Utente {
    id: number;
    nome: string;
    cognome: string;
    indirizzi: string[];
    metodiPagamento: string[];
    storicoOrdini: Ordine[];
}

