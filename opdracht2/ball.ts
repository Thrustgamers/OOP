import { Charmander } from "./pokemon";

//Creation of the Pokeball class using 2 main properties within the class: The pokemon and if the pokemon is outside of the pokeball
export class pokeball { 
  pokemon: Charmander | undefined
  outside: boolean
 
  //The constructor sets the standard fields for the pokeball using the class of Charmander and that the pokemon is inside the pokeball at first
  constructor() {
    this.pokemon = new Charmander();
    this.outside = false
  }

  //Throw fuction to set the pokemon outside the pokeball and do the attack. And state that the pokeball was thrown out of the ball
  throw() {
    this.outside = true;
    console.log(`${this.pokemon?.name} has been thrown out of pokeball`)
    this.pokemon?.doCry()
  }

  //Return function to put the pokemon back into the pokeball and state that it has returned
  return() {
    if (this.outside) console.log(`${this.pokemon?.name} has returned to pokeball`)
  }
}
 