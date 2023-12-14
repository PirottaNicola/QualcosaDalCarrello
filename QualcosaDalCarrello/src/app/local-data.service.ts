import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Prodotto } from './models/prodotto.module';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  utente = new BehaviorSubject<any>(null);

  updateUtente(value: any) {
    this.utente.next(value);
  }

  // aggiunge un prodotto al carrello
  addProductToCart(prodotto: Prodotto) {
    const utente = this.utente.getValue();
    utente.carrelloCorrente.prodotti.push(prodotto);
    this.updateUtente(utente);
  }

  // rimuove un prodotto dal carrello
  removeProductFromCart(prodotto: Prodotto) {
    const utente = this.utente.getValue();
    // se il prodotto non è presente nel carrello, non fare nulla
    if (!utente.carrelloCorrente.prodotti.includes(prodotto)) {
      return;
    }
    const index = utente.carrelloCorrente.prodotti.indexOf(prodotto);
    utente.carrelloCorrente.prodotti.splice(index, 1); // rimuove l'elemento dall'array
    this.updateUtente(utente);
  }
}
