import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto.module';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
})
export class ProdottoComponent {
  @Input()
  p!: Prodotto;
}
