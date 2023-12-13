import { Trainer } from "./trainer"

//Main function that runs the assigment using the classes made in other files
const main = () => {
   const trainer1 = new Trainer()
   const trainer2 = new Trainer()

   for (let i = 0; i <= 6; i++) {
      trainer1.throwBall()
      trainer2.throwBall()

      trainer1.returnBall()
      trainer2.returnBall()
   } 
}

main()