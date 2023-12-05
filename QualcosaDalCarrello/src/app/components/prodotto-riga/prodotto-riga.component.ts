import { Component, Input } from '@angular/core';
import { LocalDataService } from 'src/app/local-data.service';
import { Prodotto } from '../../models/prodotto.module';

@Component({
  selector: 'app-prodotto-riga',
  templateUrl: './prodotto-riga.component.html',
  styleUrls: ['./prodotto-riga.component.css'],
})
export class ProdottoRigaComponent {
  constructor(private lds: LocalDataService) {}
  @Input() p!: Prodotto; // p è un alias per il prodotto che viene passato al componente, ! significa che non può essere null o undefined

  addProductToCart(): void {
    console.log('aggiungo al carrello');
    this.lds.addProductToCart(this.p);
  }

  removeProductFromCart(): void {
    console.log('rimuovo dal carrello');
    this.lds.removeProductFromCart(this.p);
  }
}
