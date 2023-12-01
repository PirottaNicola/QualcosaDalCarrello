export interface Prodotto {
  id: number;
  urlImmagine: string;
  categoria: string;
  prezzo: number;
  nome: string;
  varianti: string[];
  quantitàProdottiVenduti: number;
  numeroReclami: number;
}
