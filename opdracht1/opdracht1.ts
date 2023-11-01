const delay = (ms: number) => { return new Promise( resolve => setTimeout(resolve, ms) )}

const randomNames = ["Nick", "Chase", "Clara", "Jack", "Susan"]

//Creation of the Charmander class using 3 main properties within the class: Name, Weakness and Strength
class Charmander { 
   name: string
   weakness: string
   strength: string

   //The constructor takes inputs during the creation of a new instance of the Charmander class being the starting name
   constructor(name : string) {
      this.name = name
      this.weakness = "Water"
      this.strength = "Fire"
   }

   //Due to the chosen language being Typescript and command line cannot be typed in i created a function to get a name from the array at the top
   newName() {
      const name = randomNames[Math.floor(Math.random() * randomNames.length)];
      this.name = name
      console.log(`New name given : ${name}`)
   }

   doCry() {
      console.log(`${this.name} is doing a cry`)
   }
}

const main = () => {
   let index: number = 0
   const pokemon = new Charmander('Alex')

   for (let i = 0; i <= 10; i++) {
      
      pokemon.doCry()

      if (i == 10 && index < 1) {
         pokemon.newName()
         index++
         i = 0
      }
   } 
}

main()