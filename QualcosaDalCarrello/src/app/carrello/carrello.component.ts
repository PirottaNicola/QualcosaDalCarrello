import { Component } from '@angular/core';
import { ProdottoComponent } from '../prodotto/prodotto.component';
import { UtenteComponent } from '../utente/utente.component';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {
  private  id=0;
  private prodotti:ProdottoComponent[]=[];
  private utente:UtenteComponent=new UtenteComponent();
  private prezzoTotale:number=0;

  
  public getUtente(){
    return this.utente;
  }
  public setUtente(utente:UtenteComponent){
    this.utente=utente;
  }
  public getProdotti(){
    return this.prodotti;
  }
  public setProdotti(prodotti:ProdottoComponent){
    this.prodotti.push(prodotti);
  }
}
