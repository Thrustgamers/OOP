import { Bulbasaur } from './pokemon/bulbasaur'
import { Charmander } from './pokemon/charmander'
import { Squirtle } from './pokemon/squirtle'

export type PokemonName = "bulbasaur" | "charmander" | "squirtle"

//Creation of the Charmander class using 3 main properties within the class: Name, Weakness and Strength
export class PokeHandler { 
   pokemon: Bulbasaur | Charmander | Squirtle

   //The constructor takes inputs during the creation of a new instance of the Charmander class being the starting name
   constructor(pokemon: PokemonName) {
      switch (pokemon) {
         case "bulbasaur":
            this.pokemon = new Bulbasaur()
            break 
         case "charmander":
            this.pokemon = new Charmander()
            break 
         case "squirtle":
            this.pokemon = new Squirtle()
            break 
      }
   }

   //Attack function to mimic a attack and note that the pokemon is doing a attack
   doCry() {
      console.log(`${this.pokemon.name} is doing a cry`)
   }
}
