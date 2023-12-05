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

  calcolaProdottiVendutiPerCategoria(): any {
    const result: any = {};

    this.createDb().products.forEach((prodotto: any) => {
      const categoria = prodotto.categoria;

      if (!result[categoria]) {
        result[categoria] = 0;
      }

      result[categoria] += prodotto.quantitàProdottiVenduti;
    });

    return result;
  }
  
  createDb() {
    console.log('Database created');

    const startDate1 = new Date('2023-09-01');
    const endDate1 = new Date('2023-10-01');

    const startDate2 = new Date('2023-11-01');
    const endDate2 = new Date('2023-12-01');

    const randomDateTimeInRange1 = () => this.formatDateTime(this.randomDate(startDate1, endDate1));
    const randomDateTimeInRange2 = () => this.formatDateTime(this.randomDate(startDate2, endDate2));

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
          carrelloCorrente: { id: 1, prodotti: [], utente: {}, prezzoTotale: 0 }
        },
      ],
      reclami: [
        {
          id: 1,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 2,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 3,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 4,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 5,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 6,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 7,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 8,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 9,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 10,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 11,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 12,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 13,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 14,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 15,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 16,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 17,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 18,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 19,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 20,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 21,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 22,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 23,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 24,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 25,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 26,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 27,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 28,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 29,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 30,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 31,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 32,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 33,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 34,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
        {
          id: 35,
          prodotto: 1,
          motivo: '',
          dataInvio: randomDateTimeInRange1(),
          dataRisposta: randomDateTimeInRange2(),
        },
      ],
    };
  }
}
