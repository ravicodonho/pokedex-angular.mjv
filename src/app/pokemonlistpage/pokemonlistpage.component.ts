import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemonlistpage',
  templateUrl: './pokemonlistpage.component.html',
  styleUrls: ['./pokemonlistpage.component.css']
})
export class PokemonlistpageComponent implements OnInit {
  public search : string = '';
  title = 'pokedex';
  pokemons : any[] = [{}];
  pokemonService: PokemonService;

  constructor(private pkmService: PokemonService) {
    this.pokemonService = pkmService;
    this.pokemons = pkmService.pegarPokemons();
  }

  ngOnInit() {
   
  }

  onSearchChange() {
    this.pokemons = this.pokemonService.pegarPokemons().filter(x => x.name.english.toLowerCase().includes(this.search.toLowerCase()));
  }

  ordenaId() {
    this.pokemons = this.pokemons.sort((x, y) => x.id - y.id);
  }

  ordenaNome() {
    this.pokemons = this.pokemons.sort((x, y) => x.name.english.localeCompare(y.name.english));
  }

  createRange(number: any){
    // var items: number[] = [];
    // for(var i = 1; i <= number; i++){
    //   items.push(i);
    // }
    // return items;
    return new Array(number);
  }

}
