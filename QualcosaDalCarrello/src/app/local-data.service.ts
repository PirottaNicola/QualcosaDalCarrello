import { Injectable } from '@angular/core';
import { UserService } from './retrieve.services';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  utente = new BehaviorSubject<any>(null);
  public utente$: Observable<any> = this.utente.asObservable();

  updateUtente(userService: UserService) {
    this.utente.next(userService.getUsers())
  }
}
