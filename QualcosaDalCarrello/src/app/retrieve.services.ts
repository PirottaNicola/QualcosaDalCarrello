/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchData {
  public async recuperaDati() {
    const data = await fetch('api/products')
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return data;
  }
}
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from './models/prodotto.module';
import { Reclamo } from './models/reclamo.module';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Prodotto[]> {
    //todo  CAMBIA I RETURN TYPE PER TUTTI I METODI
    return this.http.get<Prodotto[]>(this.productsUrl);
  }

  createProducts(product: any): Observable<any> {
    return this.http.post(this.productsUrl, product);
  }

  editProduct(product: Prodotto): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private ordersUrl = 'api/orders';
  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return this.http.get(this.ordersUrl);
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(this.ordersUrl, order);
  }

  editOrder(order: any): Observable<any> {
    return this.http.put(this.ordersUrl + order.id, order);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(this.ordersUrl + id);
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.usersUrl, user);
  }

  editUser(user: any): Observable<any> {
    return this.http.put(this.usersUrl + user.id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.usersUrl + id);
  }
}

@Injectable({
  providedIn: 'root',
})
export class cartService {
  private cartUrl = 'api/cart';
  constructor(private http: HttpClient) {}

  getCart(): Observable<any> {
    return this.http.get(this.cartUrl);
  }

  createCart(cart: any): Observable<any> {
    return this.http.post(this.cartUrl, cart);
  }

  editCart(cart: any): Observable<any> {
    return this.http.put(this.cartUrl + cart.id, cart);
  }

  deleteCart(id: number): Observable<any> {
    return this.http.delete(this.cartUrl + id);
  }
}

@Injectable({
  providedIn: 'root',
})
export class reclamiService {
  private reclamiUrl = 'api/reclami';
  constructor(private http: HttpClient) {}

  getReclami(): Observable<Reclamo[]> {
    return this.http.get<Reclamo[]>(this.reclamiUrl);
  }

  createReclami(reclami: any): Observable<any> {
    return this.http.post(this.reclamiUrl, reclami);
  }

  editReclami(reclami: any): Observable<any> {
    return this.http.put(this.reclamiUrl + reclami.id, reclami);
  }

  deleteReclami(id: number): Observable<any> {
    return this.http.delete(this.reclamiUrl + id);
  }
}
