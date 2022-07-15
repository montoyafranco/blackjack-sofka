
import Deck from "./deck.js";

const boxCards = document.getElementById("boxCard");
const boxPrize = document.getElementById("boxPrize");
const boxPlayer = document.getElementById("playerDefault");
const boxPoints = document.getElementById("boxPoints");
const boxRound = document.getElementById("boxRound");



class PLayer {
  constructor(name, elegidas, sumatoria, bandera_A) {
    this.name = name;
    this.elegidas = elegidas;
    this.sumatoria = sumatoria;
    this.bandera_A = bandera_A;
  }
    //METHODS
  print1(){
    boxCards.innerText = "" 
    this.elegidas.forEach(element => {
      boxCards.innerText += element.card + " " + element.type  + " - - " 
      
    });    
  }
  play(){};
  endGame(){};      
  startRound() {
    const firstCard = Math.floor(Math.random() * Deck.length); //
    this.elegidas.push(Deck[firstCard]);
    Deck.splice(firstCard, 1);

    const secondCard = Math.floor(Math.random() * Deck.length);
    this.elegidas.push(Deck[secondCard]);
    Deck.splice(secondCard, 1);

    this.bandera_A = 0
    player1.print1();
    
    
      
    
  }
  
  checkPoints() {
    for (let i = 0; i < this.elegidas.length; i++) {
      if (        this.elegidas[i].card == "K" ||        this.elegidas[i].card == "Q" ||        this.elegidas[i].card == "J"      ) {
        this.sumatoria = this.sumatoria + 10;
      } else if (typeof this.elegidas[i].card == "number") {
        this.sumatoria = this.sumatoria + this.elegidas[i].card;
      } else if ((this.elegidas[i].card == "A" )&& (this.bandera_A == 0)) {
        this.sumatoria = this.sumatoria + 11;
        this.bandera_A =  1;
      } else {
        this.sumatoria = this.sumatoria + 1;
      }
    }
    boxPoints.innerText = this.sumatoria
    

  }
  askCard() {
    this.elegidas.push(Deck[Math.floor(Math.random() * Deck.length)])
    player1.print1();
    
  }
 
}
// --------------------------------  Instanciar objeto ------------------
//----------------------------------  Default PLayer   --------------------
let player1 = new PLayer("Sofkian", [], 0, 0);
player1.startRound();
player1.checkPoints();
player1.print1();

let round = 0;
let prize = 1000;
let out = 0;
let choice;
//---------------------------------------Query and Listeners--------------------------------

const boton1 = document.getElementById("boton");
boton1.addEventListener("click", () => {  choice = "Y"; ;  play();});
const boton2 = document.getElementById("boton__N");
boton2.addEventListener("click", () => {  choice = "N"; ;  endGame();});
boxPlayer.innerText = player1.name

function play() {
  // Wanted to be like an interface OOP but don't know how to do it with JS
  player1.print1();
  
  if (choice == "Y") {
    
    if (player1.sumatoria > 21 ) {
      
      player1.elegidas = [];
      out += 1;
      player1.sumatoria = 0;
      alert("Sorry You lose")      
      round = 0
      if(round == 3 && out == 1){
        window.location.reload();
        alert("Game Over") }
      }
    }    
    if (player1.elegidas.length < 2) {
      player1.startRound();
    } else {
      player1.askCard();      
    }
    player1.sumatoria = 0;
    player1.checkPoints();    
    if (player1.sumatoria >= 18 && player1.sumatoria <= 21) {      
      
      round = round + 1;
      player1.elegidas = [];
      alert("You Won the hand - collect the Rewards Ending the game or Continue playing to add more rewards !")
      
      if(round == 4){
        alert("Congratulation you won 3 rounds The game will re start")
        window.location.reload();
      }
    }
    
    boxPrize.innerText = `   $    ${prize * round }         `
    choice = "";
    boxRound.innerText = round 
  }

function endGame() {
  if (choice == "N") {    
    out = out + 1;
    choice = "N";    
    player1.elegidas = []
    alert("Thanks for playing the game will restart");
    window.location.reload();
  }
}

boxPrize.innerText = `   $    ${prize * round }         `



