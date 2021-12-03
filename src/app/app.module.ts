import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { RandomcolorService } from './randomcolor.service';
import { PokemondetailpageComponent } from './pokemondetailpage/pokemondetailpage.component';
import { PokemonlistpageComponent } from './pokemonlistpage/pokemonlistpage.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PokemondetailpageComponent,
    PokemonlistpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RandomcolorService,PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
