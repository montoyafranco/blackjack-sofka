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

function Obtener_Random(){
const i_firstCard=Math.floor(Math.random() * Deck.length);
const i_secondCard=Math.floor(Math.random() * Deck.length);
 elegidas.push(Deck[i_firstCard])
 elegidas.push(Deck[i_secondCard])
 Deck.splice(i_firstCard, 1)
 Deck.splice(i_secondCard,1)



}


Obtener_Random()
console.log ("Soy el console log " ,elegidas)
console.log(Deck.length)

for (let i = 0 ;i < elegidas.length;i++ ){

    if(typeof(elegidas[i].card) == "string" && elegidas[i].card != "A" ){
        sumatoria = sumatoria + 10
        console.log()

    }else{
        sumatoria = sumatoria + elegidas[i].card
    }


}
console.log(sumatoria)
console.log(elegidas[0].card)