import { Injectable } from '@angular/core';
import pokemonJson from './../assets/pokedex.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  pegarPokemons() {
    return pokemonJson;
  }

  pegarPokemon(id: number) {
    return pokemonJson.find(x => x.id == id);
  }
}
