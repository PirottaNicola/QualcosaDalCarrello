import { Component, Input } from '@angular/core';
import { Prodotto } from '../models/prodotto.module';

@Component({
  selector: 'app-prodotto-riga',
  templateUrl: './prodotto-riga.component.html',
  styleUrls: ['./prodotto-riga.component.css'],
})
export class ProdottoRigaComponent {
  @Input() p!: Prodotto; // p è un alias per il prodotto che viene passato al componente, ! significa che non può essere null o undefined
}
