import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { ListaCategorieComponent } from './components/lista-categorie/lista-categorie.component';
import { NegozioComponent } from './components/negozio/negozio.component';
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
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
