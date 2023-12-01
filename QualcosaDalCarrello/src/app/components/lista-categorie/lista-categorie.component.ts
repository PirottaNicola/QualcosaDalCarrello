import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-categorie',
  templateUrl: './lista-categorie.component.html',
  styleUrls: ['./lista-categorie.component.css']
})
export class ListaCategorieComponent {
  @Output() mostraCategorieValore = new EventEmitter<boolean>();

  mostraCategorie(value: boolean) {
    this.mostraCategorieValore.emit(value);
  }
  redirect(a: Event) {
    console.log((a.currentTarget as Element).id);

  }
}
