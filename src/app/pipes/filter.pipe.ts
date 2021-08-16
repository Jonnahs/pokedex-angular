import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    const newValue = value.filter((a) => a);
    if (arg === '' || arg.length < 3 && isNaN(arg)) return value;
    if (!isNaN(arg) ) {
    const resultPokemons = [];
    for (const pokemons of newValue) {
      if (pokemons.number == arg) {
        resultPokemons.push(pokemons);
      };
    };
    return resultPokemons;
  } else {
    const resultPokemons = [];
    for (const pokemons of newValue) {
      console.log(pokemons);
      if (pokemons.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPokemons.push(pokemons);
      };
    };
    return resultPokemons;
  };
  }


}



