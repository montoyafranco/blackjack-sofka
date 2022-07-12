import Deck from "./deck.js"

class Game{
 
/*
 ------------- Requisitos

- Se gana si uno esta entre (18 y 21)
- Necesito 1 contador de rondas 
- Necesito  un objeto que contenga cartas

- Necesito por comandos que con Y o N continue jugando o no

-----------IDEAS----

Meter todo dentro de un menu de opciones con ciclo while en la que si sigue jugando aumente el contador y si le da a N imprima 
el resultado final y reinicie todo 



----------- Pseudo-logica


                      CONDICION GANADORA           if(puntaje_actual >= 18 || puntaje_actual >= 21 ) -- PREGUNTAR SI  Y o N   para jugar

                      CONDICION DE "A"             si aparece 1 vez == 11  else 1  

                      CONDICION RONDAS              R1 == WIN ? 1000
                                                    R2 == WIN ? 2000 : 0 
                                                    R3 == WIN ? 3000 : 2000

                      CONDICION CARTAS              No debe repetirse 
                                                    IF (cartas_jugadas.includes( carta_nueva )) {
                                                        sacar_otra_carta() 

                                                    }else{
                                                        cartas_jugadas.push( carta_nueva )
                                                    }



---------FUNCIONES
 --- sacarCarta ()    hacer que verifique si ya existe
 --- 


------------- VARIABLES
cartas_jugadas = [ ]

carta_nueva =[]

puntaje_actual = 0

contador_rondas = 1

array_cartas = [A,2,3,4,5,6,7,8,9,10,K,J,Q]

array_tipo_carta = [♠, ♥ ,🔹 ,🍀 ]
                                                */}

                                                


// Deck.forEach(element => {
//     console.log(element)
    
// });
let elegidas = []
let sumatoria = 0
let ronda = 1
let answer ="";

// EMPIEZO LA RONDA 2 cartas random
function startRound(){
const i_firstCard=Math.floor(Math.random() * Deck.length); // guardo el indice random con el length del DECK

elegidas.push(Deck[i_firstCard]) // pusheo a cartas elegidas con el indice

Deck.splice(i_firstCard, 1) // la saco para que no se repita del array

const i_secondCard=Math.floor(Math.random() * Deck.length); 
 elegidas.push(Deck[i_secondCard]) 
 Deck.splice(i_secondCard,1)

}

// pushear 1 carta mas random
function askCard(){
    elegidas.push(Deck[Math.floor(Math.random() * Deck.length)])
    
}

let bandera_A = 0 
startRound()

revisar_puntos()


console.log ("Estas son tus cartas " ,elegidas)


 // DETECTAR CANTIDAD DE A 

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

import readline from 'readline';


const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  scanner.question(" Y - Draw the card...\n N - Finish the game...\n", answer => {
    switch(answer){
              case "Y":
                console.log("Draw the card...")
                askCard();
                sumatoria = 0;
                revisar_puntos()
                console.log ("Estas son tus cartas " ,elegidas)
                console.log("Tu puntaje es : " ,sumatoria)
                if(sumatoria >= 18 && sumatoria <=21 ){console.log("GANASTE")}else{console.log("PERDISTE")}

                break;


              case "N":
                console.log("Ok, game finished.");
                break;
              default:
                console.log("Invalid input. ");
                break;
    
    }
    scanner.close();
});