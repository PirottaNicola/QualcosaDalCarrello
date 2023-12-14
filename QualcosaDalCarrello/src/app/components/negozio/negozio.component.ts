import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Prodotto } from 'src/app/models/prodotto.module';
import { AppState } from 'src/app/state/app.reducer';
import { ProductService } from '../../retrieve.services';
import { loadProdotti } from './../../state/app.actions';
@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css'],
})
export class NegozioComponent implements OnInit {
  variabile: boolean = true;
  prodotti$: Observable<Prodotto[]>; // crea un observable di prodotti

  constructor(
    private productService: ProductService,
    private store: Store<AppState>
  ) {
    this.prodotti$ = this.store.select((state) => state.prodotti);
  }
  ngOnInit(): void {
    const prodotti = this.productService.getProducts();
    prodotti.subscribe((data) => console.log(data));

    // dispatch the loadProdotti action
    console.log('dispatching loadProdotti from negozio');
    this.store.dispatch(loadProdotti()); // carica i prodotti
  }
  categorieSiNo(value: boolean) {
    this.variabile = value;
  }
}
