import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { ListaCategorieComponent } from './components/lista-categorie/lista-categorie.component';
import { NegozioComponent } from './components/negozio/negozio.component';
import { SupportoComponent } from './components/supporto/supporto.component';
import { UtenteComponent } from './components/utente/utente.component';

const routes: Routes = [
  { path: 'utente', component: UtenteComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'negozio',
    component: NegozioComponent,
    children: [
      { path: 'listaCategorie', component: ListaCategorieComponent },
      { path: 'categoria', component: CategoriaComponent },
    ],
  },
  { path: 'contatti', component: ContattiComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'supporto', component: SupportoComponent },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuardService], // this is the guard that checks if the user is logged in
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
