import { Component } from '@angular/core';

@Component({
  selector: 'app-supporto',
  templateUrl: './supporto.component.html',
  styleUrls: ['./supporto.component.css'],
})
export class SupportoComponent {
  model: any = {};
  onSubmit() {
    console.log(this.model);
  }
}
