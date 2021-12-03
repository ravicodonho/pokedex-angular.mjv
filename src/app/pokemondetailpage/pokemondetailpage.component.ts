import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemondetailpage',
  templateUrl: './pokemondetailpage.component.html',
  styleUrls: ['./pokemondetailpage.component.css']
})
export class PokemondetailpageComponent implements OnInit {

  indexStr : string = "";
  style: string = "";
  public pokemon!: any;
  private sub: any;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router, private pkmService: PokemonService) { 
     

    }

  ngOnInit(): void {
  
    this.sub = this._Activatedroute.params.subscribe(params => {
      var id = +params['id']; // (+) converts string 'id' to a number
      this.indexStr = String(id).padStart(3, '0');
      this.pokemon = this.pkmService.pegarPokemon(id);
      // In a real app: dispatch action to load the details here.
   });
  }

}
