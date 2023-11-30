import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtenteComponent } from './utente/utente.component';
@NgModule({
  declarations: [AppComponent, UtenteComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule], // this imoports are avaialble in all the application (in all the modules) and they are imported only once
  providers: [], // this is the place where you put your services
  bootstrap: [AppComponent],
})
export class AppModule {}
