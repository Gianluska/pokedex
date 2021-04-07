import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {
  private readonly pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=30';

  public pokemonArray = [];

  public search = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons() {
    this.http.get(this.pokeApiUrl).subscribe((res: any) => {
      res.results.map((pokemon, index) => {
        const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
        pokemon.image = pokemonImageUrl;
        this.pokemonArray.push(pokemon);
      });

      console.log(this.pokemonArray);
    });
  }

}
