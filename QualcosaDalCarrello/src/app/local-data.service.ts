import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  utente = new BehaviorSubject<any>(null);

  updateUtente(value: any) {
    this.utente.next(value);
  }
}
