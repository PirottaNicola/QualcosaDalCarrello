import { Component } from '@angular/core';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  private id:number=0;
  private urlImmagine:string="";
  private categoria:string="";
  private prezzo:number=0;
  private nome:string="";
  private varianti:string[]=[];
}
