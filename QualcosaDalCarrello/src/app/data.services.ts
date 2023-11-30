import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root', // this means that the service should be provided in the root module
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      products: [{}],
      utenti: [{}],
    };
  }
}
//axios
