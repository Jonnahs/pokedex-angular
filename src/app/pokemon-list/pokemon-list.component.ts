import { Component} from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent  {
  filterPokemon = '';

  // public pokemons: Pokemon[] = [
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  //     number: 1,
  //     name: 'Bulbasaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison,
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
  //     number: 2,
  //     name: 'Ivysaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison,
  //     ],
  //   },
  //   {
  //     image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
  //     number: 3,
  //     name: 'Venusaur',
  //     types: [
  //       Type.Grass,
  //       Type.Poison,
  //     ],
  //   },
  // ];

  constructor(public pokemonService: PokemonService) {}
}


export interface Pokemon {
  image: string;
  number: number;
  name: string;
  height: number;
  weight: number;
  types: Type[];
  abilities: any[];
}

export enum Type {
  Grass = 'Grass',
  Poison = 'Poison'
}

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`;
}

export function getPokemonNumber(pokemon: Pokemon): string {
  return leadingZero(pokemon.number);
}

function leadingZero(str: string | number, size = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}
