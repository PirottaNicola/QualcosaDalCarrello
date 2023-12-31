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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthGuardService } from './auth-guard.service';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CaroselloComponent } from './components/carosello/carosello.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ChartComponent } from './components/chart/chart.component';
import { ListaCategorieComponent } from './components/lista-categorie/lista-categorie.component';
import { ProdottoRigaComponent } from './components/prodotto-riga/prodotto-riga.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SupportoComponent } from './components/supporto/supporto.component';
import { UtenteComponent } from './components/utente/utente.component';
import { AppEffects } from './state/app.effects';
import { prodottoReducer } from './state/app.reducer';

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
    SupportoComponent,
    ReactiveFormComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ prodotto: prodottoReducer }),
    EffectsModule.forRoot([AppEffects]),
  ], // this imports are avaialble in all the application (in all the modules) and they are imported only once
  providers: [DataService, AuthGuardService], // this is the place where you put your services
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // initialize the database
    const data = new DataService();
    data.createDb();
  }
}
