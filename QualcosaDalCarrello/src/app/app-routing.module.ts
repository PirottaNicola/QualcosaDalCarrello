import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { NegozioComponent } from './negozio/negozio.component';
import { UtenteComponent } from './utente/utente.component';

const routes: Routes = [
  { path: 'utente', component: UtenteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'negozio', component: NegozioComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
