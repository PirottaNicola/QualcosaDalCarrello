import { Component } from '@angular/core';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {
  private id=0;
  private nome:string="";
  private cognome:string="";
  private indirizzi:string[]=[];
  private metodiPagamento:string[]=[];
  private storicoOrdini:string[]=[];

  public getId(){
    return this.id;
  }
  public setId(id:number){
    this.id=id;
  }
  public getNome(){
    return this.nome;
  }
  public setNome(nome:string){
    this.nome=nome;
  }
}
