import { Component } from '@angular/core';
import { FetchData } from '../retrieve.services';

@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css']
})
export class NegozioComponent {
  constructor(private service: FetchData) { }
}
