import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto.module';
import { LocalDataService } from './../../local-data.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
})
export class ProdottoComponent {
  constructor(private lds: LocalDataService) {}
  @Input()
  p!: Prodotto;

  addProductToCart(): void {
    console.log('aggiungo al carrello');
    this.lds.addProductToCart(this.p);
  }

  removeProductFromCart(): void {
    console.log('rimuovo dal carrello');
    this.lds.removeProductFromCart(this.p);
  }
}
