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
import { ProductService, UserService } from '../retrieve.services';
@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css'],
})
export class NegozioComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    const prodotti = this.productService.getProducts();
    prodotti.subscribe((data) => console.log(data));

    const user = this.userService.getUsers(); // da spostare in app, va chiamato solo una volta quando entri nel sito per identificare l'utente
    user.subscribe((data) => console.log(data));
  }
}
