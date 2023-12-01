import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DataService } from './data.services';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NegozioComponent } from './negozio/negozio.component';
import { OrdineComponent } from './ordine/ordine.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
//import { FetchData } from './retrieve.services';
import { UtenteComponent } from './utente/utente.component';
@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    ProdottoComponent,
    CarrelloComponent,
    OrdineComponent,
    NavbarComponent,
    NegozioComponent,
    HomeComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
  ], // this imports are avaialble in all the application (in all the modules) and they are imported only once
  providers: [DataService], // this is the place where you put your services
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App module created');

    // initialize the database
    const data = new DataService();
    data.createDb();
  }
}
