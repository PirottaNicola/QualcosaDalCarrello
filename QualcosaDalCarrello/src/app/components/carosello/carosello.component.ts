import { Component } from '@angular/core';
import { Prodotto } from '../../models/prodotto.module';
import { ProductService } from '../../retrieve.services';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
})
export class CaroselloComponent {
  // prodotto: array di prodotti
  prodotti: Prodotto[] = [];
  constructor(productService: ProductService) {
    const prodotti = productService.getProducts();
    prodotti.subscribe((data) => {
      this.prodotti = data;
    });
  }
}
