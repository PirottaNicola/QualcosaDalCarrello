import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {
    console.log('Data service created');
  }


  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  private formatDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return date.toLocaleDateString('en-US', options);
  }

  createDb() {
    console.log('Database created');

    const startDate = new Date('2022-01-01');
    const endDate = new Date('2023-12-01');

    const randomDateTimeInRange = () => this.formatDateTime(this.randomDate(startDate, endDate));

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
          carrelloCorrente: {
            id: 1, prodotti: [
              {
                id: 6,
                urlImmagine: 'assets/images/ipad.png',
                categoria: 'Tablet',
                prezzo: 499,
                nome: 'Ipad Air 3',
                varianti: [128, 256],
                quantitàProdottiVenduti: 355,
                numeroReclami: 33,
              }
            ], utente: {}, prezzoTotale: 0
          }
        },
      ],
      reclami: [
        {
          id: 1,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 2,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 3,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 4,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 5,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 6,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 7,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 8,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 9,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 10,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 11,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 12,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 13,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 14,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 15,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 16,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 17,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 18,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 19,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 20,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 21,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 22,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 23,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 24,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 25,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 26,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 27,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 28,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 29,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 30,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 31,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 32,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 33,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 34,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
        {
          id: 35,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange(),
          dataRisposta: randomDateTimeInRange(),
        },
      ],
    };
  }
}
