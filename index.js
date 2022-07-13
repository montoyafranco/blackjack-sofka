import Deck from "./deck.js"

import readline from 'readline';

import inquirer from "inquirer";



class Game{
 
}
class PLayer{
    
    constructor(name ){        
        this.name = name        
    }
}

 let player1 = new PLayer("Agus")  
 

// atributos o variavles
let elegidas = [] ;
let sumatoria = 0 ;

let answer ="";
let bandera_A = 0 ;

function startRound(){
const i_firstCard=Math.floor(Math.random() * Deck.length); // 

elegidas.push(Deck[i_firstCard]) 

Deck.splice(i_firstCard, 1) 

const i_secondCard=Math.floor(Math.random() * Deck.length); 
 elegidas.push(Deck[i_secondCard]) 
 Deck.splice(i_secondCard,1)

}
function askCard(){
    elegidas.push(Deck[Math.floor(Math.random() * Deck.length)])
    
}
console.log("-----------------Welcome to blackjack------------")
console.log("Player: " ,player1.name)

startRound()
revisar_puntos()


console.log ("Estas son tus cartas " ,elegidas)


 

// ciclo para corroborar tipo de carta y puntaje
function revisar_puntos(){
for (let i = 0 ;i < elegidas.length;i++ ){  

if(elegidas[i].card == "K" || elegidas[i].card == "Q" || elegidas[i].card == "J" ){
    sumatoria = sumatoria + 10
}else if (typeof(elegidas[i].card) == "number" ){
    sumatoria = sumatoria + elegidas[i].card

}else if( elegidas[i].card == "A" && bandera_A == 0)
{ sumatoria = sumatoria + 11
    bandera_A = bandera_A + 1
}else{
    sumatoria = sumatoria + 1
}
    
}}





let choice ;           

const inquireMenu = async() =>{

    const opt = await inquirer.prompt([{type: "list",
    name: "opcion",
    message : " Y-Draw card  ------- N - Finish",
    choices: ["Y", "N"]

}])

choice = opt
}
let ronda = 1;
let prize = 1000;
let manos = 0
let salirse = 0;

while(salirse !== 1 ){
    await inquireMenu()
    
    
   

    console.log("Soy choice" ,choice)
   
   switch (choice.opcion){
       case "Y":
         console.log("tu ronda es :",ronda)
         console.log("Draw the card...")
         
         if(elegidas.length < 2){
            startRound()
         }else{
            askCard();

         }
         sumatoria = 0;
         revisar_puntos()
         console.log ("Estas son tus cartas " ,elegidas)
         console.log("Tu puntaje es : " ,sumatoria)
         manos = manos + 1
         if(sumatoria >=18 && sumatoria <= 21){
            console.log("You win")
            ronda = ronda + 1
            manos = 0
            elegidas = []
         }
         if(sumatoria >21){
            elegidas = []
            salirse += 1
            sumatoria = 0
            console.log("sorry you loose take the reward if there is one")
            // console.log("your reward is : $", prize * ronda)
         }
   
         break;   
   
       case "N":
         console.log("Ok, game finished.");
        //  console.log("your reward is : $", prize * ronda )         
         salirse = salirse + 1
         break;
       default:
         console.log("Invalid input. ");
         break;
   
   }
}
console.log("your reward is : $", prize * ronda )