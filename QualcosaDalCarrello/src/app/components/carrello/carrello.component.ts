import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { LocalDataService } from 'src/app/local-data.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent {
  carrello: any;
  utente: any;
  constructor(private localData: LocalDataService) {
    // viene preso l'utente dal servizio locale
    this.localData.utente.subscribe((data) => {
      if (data) {
        this.utente = data;
        this.carrello = this.utente.carrelloCorrente;
        console.log('utente: ', this.utente);
        console.log('carrello: ', this.carrello);
      }
    });
  }
}
