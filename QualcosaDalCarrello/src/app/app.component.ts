import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'QualcosaDalCarrello';

  /*     const user = this.userService.getUsers(); // da spostare in app, va chiamato solo una volta quando entri nel sito per identificare l'utente
    user.subscribe((data) => console.log(data)); */
}
