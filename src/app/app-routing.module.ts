import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonlistpageComponent } from './pokemonlistpage/pokemonlistpage.component';
import { PokemondetailpageComponent } from './pokemondetailpage/pokemondetailpage.component';

const routes: Routes = [
  { path: 'all', component: PokemonlistpageComponent },
  { path: 'pokemon/:id', component: PokemondetailpageComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
