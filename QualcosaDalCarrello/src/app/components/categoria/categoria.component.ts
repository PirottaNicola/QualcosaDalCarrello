import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  @Output() mostraCategorieValore = new EventEmitter<boolean>();

  mostraCategorie(value: boolean) {
    this.mostraCategorieValore.emit(value);
  }
  redirect(a: Event) {
    console.log((a.currentTarget as Element).id);

  }
}
