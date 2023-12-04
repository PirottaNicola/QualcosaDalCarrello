import { Injectable } from '@angular/core'; // this is the decorator that allows you to inject the service in the constructor of the component
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root', // this means that the service should be provided in the root module
})
export class DataService implements InMemoryDbService {
  constructor() {
    console.log('Data service created');
  }
  createDb() {
    console.log('Database created');
    return {
      products: [
        {
          id: 1,
          urlImmagine: 'mouse.png',
          categoria: 'Accessories',
          prezzo: 15,
          nome: 'Mouse',
          varianti: ['Rosso', 'Blu'],
          quantitàProdottiVenduti: 55,
          numeroReclami: 23,
        },
        {
          id: 2,
          urlImmagine: 'tastiera.png',
          categoria: 'Accessories',
          prezzo: 15,
          nome: 'Tastiera',
          varianti: ['Rosso', 'Blu'],
          quantitàProdottiVenduti: 46,
          numeroReclami: 13,
        },
        {
          id: 3,
          urlImmagine: 'ufficio.png',
          categoria: 'Desktop',
          prezzo: 550,
          nome: 'Desktop Computer',
          varianti: ['Rosso gaming', 'Rosa'],
          quantitàProdottiVenduti: 255,
          numeroReclami: 23,
        },
        {
          id: 4,
          urlImmagine: 'gaming.png',
          categoria: 'Desktop',
          prezzo: 950,
          nome: 'Desktop Gaming',
          varianti: ['Rosso', 'Blu'],
          quantitàProdottiVenduti: 155,
          numeroReclami: 54,
        },
        {
          id: 5,
          urlImmagine: 'silksong.png',
          categoria: 'Software',
          prezzo: 15,
          nome: 'Hollow Knigth',
          varianti: [],
          quantitàProdottiVenduti: 999,
          numeroReclami: 1,
        },
        {
          id: 6,
          urlImmagine: 'ipad.png',
          categoria: 'Tablet',
          prezzo: 499,
          nome: 'Ipad Air 3',
          varianti: [128, 256],
          quantitàProdottiVenduti: 355,
          numeroReclami: 33,
        },
      ],
      users: [
        {
          id: 1,
          nome: 'Mario',
          cognome: 'Rossi',
          indirizzi: ['Via pace brindisina 1'],
          metodiPagamento: ['Sei Povero'],
          storicoOrdini: [],
          carrelloCorrente: []
        },
      ],
    };
  }
}
