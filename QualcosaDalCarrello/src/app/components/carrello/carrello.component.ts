import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { UtenteComponent } from '../utente/utente.component';
import { Utente } from 'src/app/models/utente.module';
import { UserService } from 'src/app/retrieve.services';
import { Carrello } from 'src/app/models/carrello.module';
import { LocalDataService } from 'src/app/local-data.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements AfterViewChecked {
  carrello: any;
  utente: any;
  constructor(user: UserService, private localData: LocalDataService) {
    this.localData.utente$.subscribe(data => this.utente = data);
  } ngAfterViewChecked(): void {
    console.log(this.carrello);
  }
  ;


}
