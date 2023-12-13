import { PokeHandler, PokemonName } from "./pokemon";

const pokemonNames: PokemonName[] = ["bulbasaur", "charmander", "squirtle"];

//Creation of the Pokeball class using 2 main properties within the class: The pokemon and if the pokemon is outside of the pokeball
export class pokeball { 
  pokehandler: PokeHandler
  outside: boolean
 
  //The constructor sets the standard fields for the pokeball using the class of Charmander and that the pokemon is inside the pokeball at first
  constructor() {
    const randomIndex = Math.floor(Math.random() * pokemonNames.length);
    const randomPokemon: PokemonName = pokemonNames[randomIndex];
    this.pokehandler = new PokeHandler(randomPokemon);
    this.outside = false
  }

  //Throw fuction to set the pokemon outside the pokeball and do the attack. And state that the pokeball was thrown out of the ball
  throw() {
    this.outside = true;
    console.log(`${this.pokehandler?.pokemon.name} has been thrown out of pokeball`)
    this.pokehandler?.doCry()
  }

  //Return function to put the pokemon back into the pokeball and state that it has returned
  returnPokemon() {
    if (this.outside) { 
      console.log(`${this.pokehandler?.pokemon.name} has returned to pokeball`)
    }
  }
}
 