/* import { Component, OnInit } from '@angular/core';
import { FetchData } from '../retrieve.services';
@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css'],
})
export class NegozioComponent implements OnInit {
  constructor(private service: FetchData) {}
  ngOnInit(): void {
    this.service.recuperaDati();
  }
} */
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../retrieve.services';
@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css'],
})
export class NegozioComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    const prodotti = this.productService.getProducts();
    prodotti.subscribe((data) => console.log(data));
  }
}
