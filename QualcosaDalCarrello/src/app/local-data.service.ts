import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  utente = new BehaviorSubject<any>(null);
  public utente$: Observable<any> = this.utente.asObservable();

  updateUtente(value: any) {
    this.utente.next(value);
  }
}
