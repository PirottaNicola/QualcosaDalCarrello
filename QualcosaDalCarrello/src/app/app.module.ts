import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtenteComponent } from './utente/utente.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { OrdineComponent } from './ordine/ordine.component';
@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    ProdottoComponent,
    CarrelloComponent,
    OrdineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
