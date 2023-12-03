import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/models/prodotto.module';
import { ProductService } from 'src/app/retrieve.services';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent {
  // takes the category name from the url
  nomeCategoria: string = '' + this.ActivatedRoute.snapshot.queryParams['c']; // 'c' is the name of the parameter in the url
  prodotti: Prodotto[] = [];

  constructor(
    private productService: ProductService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.productService.getProducts().subscribe((data) => {
      if (this.nomeCategoria !== 'all') {
        this.prodotti = data.filter((p) => p.categoria === this.nomeCategoria); // filter the products by category
      } else {
        this.prodotti = data;
      }
    });
  }
}
