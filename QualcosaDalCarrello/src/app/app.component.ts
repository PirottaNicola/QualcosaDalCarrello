import { Component } from '@angular/core';
import { LocalDataService } from './local-data.service';
import { UserService } from './retrieve.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'QualcosaDalCarrello';
  utente: any;
  constructor(
    private userService: UserService,
    private localData: LocalDataService
  ) {
    // quando viene costruita l'applicazione, viene preso dal database l'utente che la sta utilizzando (in teoria come conseguenza di un login)
    const user = this.userService.getUsers();
    user.subscribe((data) => {
      this.utente = data[0];
      // viene aggiornato il servizio locale con l'utente e il suo carrello
      this.localData.updateUtente(this.utente);
    });
  }
}
