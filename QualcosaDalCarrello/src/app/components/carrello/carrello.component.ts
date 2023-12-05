import {
  Component, ElementRef, ViewChild,
} from '@angular/core';
import { LocalDataService } from 'src/app/local-data.service';
import { Carrello } from 'src/app/models/carrello.module';
import { Prodotto } from 'src/app/models/prodotto.module';
@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent {
  carrello: any;
  utente: any;
  @ViewChild('modale') modale!: ElementRef;
  dNone: string = "d-none";
  dDisplay: string = " ";
  viewModal: string = this.dNone;
  constructor(private localData: LocalDataService) {
    // viene preso l'utente dal servizio locale
    this.localData.utente.subscribe((data) => {
      if (data) {
        this.utente = data;
        this.carrello = this.utente.carrelloCorrente;
        console.log('utente: ', this.utente);
        console.log('carrello: ', this.carrello.prodotti);
        this.carrello.prezzoTotale = this.sommaPrezzo(this.carrello.prodotti);
      }
    });

  }
  openModale() {
    if (this.viewModal === this.dNone) {
      this.viewModal = this.dDisplay;
      console.log();

    } else this.viewModal = this.dNone;
  }


  sommaPrezzo(prodotti: Prodotto[]): number {
    let totale: number = 0;
    if (prodotti.length > 0) {
      for (let prodotto of prodotti) {
        totale += prodotto.prezzo;
        console.log("calcolosomma");
      }
    }
    console.log("calcolosomma2");
    return totale;
  }
}
