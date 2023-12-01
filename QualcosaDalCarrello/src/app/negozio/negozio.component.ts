import { Component, OnInit } from '@angular/core';
import { FetchData } from '../retrieve.services';

@Component({
  selector: 'app-negozio',
  templateUrl: './negozio.component.html',
  styleUrls: ['./negozio.component.css']
})
export class NegozioComponent implements OnInit {
  constructor(private service: FetchData) { }
  ngOnInit(): void {
    this.service.recuperaDati();
  }

}
