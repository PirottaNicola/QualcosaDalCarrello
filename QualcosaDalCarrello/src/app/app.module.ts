import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtenteComponentComponent } from './utente-component.component';
import { UtenteComponent } from './utente/utente.component';

@NgModule({
  declarations: [
    AppComponent,
    UtenteComponentComponent,
    UtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
