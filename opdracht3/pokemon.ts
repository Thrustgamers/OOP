const randomNames = ["Nick", "Chase", "Clara", "Jack", "Susan"]

//Creation of the Charmander class using 3 main properties within the class: Name, Weakness and Strength
export class Pokemon { 
   name: string
   weakness: string
   strength: string

   //The constructor takes inputs during the creation of a new instance of the Charmander class being the starting name
   constructor(name: string, weakness: string, strength: string) {
      this.name = name
      this.weakness = weakness
      this.strength = strength
   }

   //Due to the chosen language being Typescript and command line cannot be typed in i created a function to get a name from the array at the top
   newName() {
      const name = randomNames[Math.floor(Math.random() * randomNames.length)];
      this.name = name
      console.log(`New name given : ${name}`)
   }

   //Attack function to mimic a attack and note that the pokemon is doing a attack
   doCry() {
      console.log(`${this.name} is doing a cry`)
   }
}
