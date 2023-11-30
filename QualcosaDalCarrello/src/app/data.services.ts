
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      products: [
        {
          id: 1,
          urlImmagine: "",
          categoria: "Accessories",
          prezzo: 15,
          nome: "Mouse",
          varianti: [
            'Rosso',
            'Blu'
          ],
          quantitàProdottiVenduti: 55,
          numeroReclami: 23
        },
        {
          id: 2,
          urlImmagine: "",
          categoria: "Accessories",
          prezzo: 15,
          nome: "Tastiera",
          varianti: [
            'Rosso',
            'Blu'
          ],
          quantitàProdottiVenduti: 46,
          numeroReclami: 13
        },
        {
          id: 3,
          urlImmagine: "",
          categoria: "Desktop",
          prezzo: 550,
          nome: "Desktop Computer",
          varianti: [
            'Rosso gaming',
            'Rosa'
          ],
          quantitàProdottiVenduti: 255,
          numeroReclami: 23
        },
        {
          id: 4,
          urlImmagine: "",
          categoria: "Desktop",
          prezzo: 950,
          nome: "Desktop Gaming",
          varianti: [
            'Rosso',
            'Blu'
          ],
          quantitàProdottiVenduti: 155,
          numeroReclami: 54
        },
        {
          id: 5,
          urlImmagine: "",
          categoria: "Software",
          prezzo: 15,
          nome: "Hollow Knigth",
          varianti: [],
          quantitàProdottiVenduti: 999,
          numeroReclami: 1
        },
        {
          id: 6,
          urlImmagine: "",
          categoria: "Tablet",
          prezzo: 499,
          nome: "Ipad Air 3",
          varianti: [
            128,
            256
          ],
          quantitàProdottiVenduti: 355,
          numeroReclami: 33
        }
      ],
      utenti: [
        {
          id: 1,
          nome: 'Mario',
          cognome: 'Rossi',
          indirizzi: [
            'Via pace brindisina 1'
          ],
          metodiPagamento: [
            'Sei Povero'
          ],
          storicoOrdini: []
        }
      ]
    };
  }
}
//axios