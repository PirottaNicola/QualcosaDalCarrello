import { Component } from '@angular/core';
import { CarrelloComponent } from '../carrello/carrello.component';
import { UtenteComponent } from '../utente/utente.component';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})
export class OrdineComponent {
  private id=0;
  private carrello:CarrelloComponent=new CarrelloComponent();
  private utente:UtenteComponent=new UtenteComponent();

  public getCarrello(){
    return this.carrello;
  }
  public setCarrello(carrello:CarrelloComponent){
    this.carrello=carrello;
  }
  public getUtente(){
    return this.utente;
  }
  public setUtente(utente:UtenteComponent){
    this.utente=utente;
  }
  
}
