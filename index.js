import Deck from "./deck.js"

import readline from 'readline';

import inquirer from "inquirer";

const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

class Game{
 
}
class PLayer{
    
    constructor(name ){        
        this.name = name        
    }
}

 let player1 = new PLayer("Agus")  
 console.log(player1.name)

// atributos o variavles
let elegidas = [] ;
let sumatoria = 0 ;
let ronda = 1 ;
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

console.log("Tu puntaje es : " ,sumatoria)
if(sumatoria >= 18 && sumatoria <=21 ){console.log("GANASTE")}else{console.log("PERDISTE")}

// si todavia te falta para llegar a 21 con Y sacas otra carta con N te retiras y ganas lo acumulado 
//si ganas se te pregunta con R si queres otra ronda para mas premio 

ronda = 1
let salirse = 0


    scanner.question(" Y - Draw the card...\n N - Finish the game...\n", answer => {
        
        switch (answer){
                 case "Y":
                   console.log("tu ronda es :",ronda)
                   console.log("Draw the card...")
                   askCard();
                   sumatoria = 0;
                   revisar_puntos()
                   console.log ("Estas son tus cartas " ,elegidas)
                   console.log("Tu puntaje es : " ,sumatoria)  
                     
   
                   break;
   
   
                 case "N":
                   console.log("Ok, game finished.");
                   console.log("your reward is :" )
                   salirse = 1
                   break;
                 default:
                   console.log("Invalid input. ");
                   break;
       
       }
       scanner.close();
    })



const inquireMenu = async() =>{

    const opt = await inquirer.prompt([{type: "list",
    name: "opcion",
    message : " Que desea hacer",
    choices: ["opcion 1", "opcion 2"]

}])
return opt
}

inquireMenu()
   

  