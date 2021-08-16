import { Component, OnInit, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber,Pokemon } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {


  @Input()
  public pokemon!: Pokemon
  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;

  constructor() {}

  ngOnInit(): void {
  }

}
