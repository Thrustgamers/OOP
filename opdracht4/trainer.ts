import { pokeball } from "./ball"

const randomNames = ["Trainer Nick", "Trainer Chase", "Trainer Clara", "Trainer Jack", "Trainer Susan"]

//Trainer class, this is the player that holds 6 pokeball with all Charmanders in it. 
//This class takes 3 properties: Name of the trainer, Array of Pokeballs and the amount of pokeballs possible
export class Trainer {
    name : string
    ball: Array<pokeball>
    ballAmount = 6

    //Constructor setting basic values for the class properties. Using a for loop and giving each pokeball a Charmander.
    constructor() {
        this.name = randomNames[Math.floor(Math.random() * randomNames.length)]  
        this.ball = []
        for (let i = 0; i < this.ballAmount; i++) {
            this.ball[i] = new pokeball()
        }
    }

    //Throw function to start the process of throwing out a pokemon from its pokeball.
    throwBall() {
        if (this.ballAmount === 0) return console.log('All pokeballs have been thrown out')
        --this.ballAmount
        this.ball[this.ballAmount].throw()
    }

    //Return function to start the process of returning a pokenon to its pokeball.
    returnBall() {
        this.ball[this.ballAmount].returnPokemon()
    }
}