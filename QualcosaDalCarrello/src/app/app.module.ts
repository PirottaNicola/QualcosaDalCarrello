import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NegozioComponent } from './components/negozio/negozio.component';
import { OrdineComponent } from './components/ordine/ordine.component';
import { ProdottoComponent } from './components/prodotto/prodotto.component';
import { DataService } from './data.services';
//import { FetchData } from './retrieve.services';
import { CaroselloComponent } from './components/carosello/carosello.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ChartComponent } from './components/chart/chart.component';
import { ListaCategorieComponent } from './components/lista-categorie/lista-categorie.component';
import { UtenteComponent } from './components/utente/utente.component';
import { ProdottoRigaComponent } from './prodotto-riga/prodotto-riga.component';
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
    ContattiComponent,
    ListaCategorieComponent,
    CaroselloComponent,
    CategoriaComponent,
    ChartComponent,
    ProdottoRigaComponent,
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
