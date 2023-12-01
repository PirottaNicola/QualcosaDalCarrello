import { Component } from '@angular/core';
import { UserService } from './retrieve.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'QualcosaDalCarrello';

  constructor(private userService: UserService) {
    // quando viene costruita l'applicazione, viene preso dal database l'utente che la sta utilizzando (in teoria come conseguenza di un login)
    const user = this.userService.getUsers();
    user.subscribe((data) =>
      console.log("accesso effettuato dall'utente: ", data)
    );
  }
}
