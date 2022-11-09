// First WAY OF SOLVING THIS PROBLEM

var reloadParagraph = document.querySelectorAll("p")[0];

reloadParagraph.setAttribute("class" , "reload");

// dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];


// dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];


function start(){
  
  image1.setAttribute("src" , randomDiceImage1);

  image2.setAttribute("src" , randomDiceImage2);


  // changing the title
  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 is the winner !";
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 is the winner !";
  }
  else{
    document.querySelector("h1").textContent = "Draw !";
  }
  
  reloadParagraph.setAttribute("class" , "");

}



// SECOND WAY OF SOLVING THIS PROBLEM

// Creating the random number
// function getRandom(){
//   var randomNumber = Math.random();
//   randomNumber = randomNumber * 6;
//   var diceNumber = Math.floor(randomNumber) + 1;

//   return diceNumber;
// }

// var dice1 = getRandom();
// var dice2 = getRandom();


// dice number 1
// if (dice1 === 1){
//   document.querySelector(".dice .img1").setAttribute("src" , "images/dice1.png");
// }
// else if (dice1 === 2){
//   document.querySelector(".dice .img1").setAttribute("src" , "images/dice2.png");
// }
// else if (dice1 === 3){
//   document.querySelector(".dice .img1").setAttribute("src" , "images/dice3.png");
// }
// else if (dice1 === 4){
//   document.querySelector(".dice .img1").setAttribute("src" , "images/dice4.png");
// }
// else if (dice1 === 5){
//   document.querySelector(".dice .img1").setAttribute("src" , "images/dice5.png");
// }
// else{
//   document.querySelector(".dice .img1").setAttribute("src" , "images/dice6.png");
// }


// dice number 2
// if (dice2 === 1){
//   document.querySelector(".dice .img2").setAttribute("src" , "images/dice1.png");
// }
// else if (dice2 === 2){
//   document.querySelector(".dice .img2").setAttribute("src" , "images/dice2.png");
// }
// else if (dice2 === 3){
//   document.querySelector(".dice .img2").setAttribute("src" , "images/dice3.png");
// }
// else if (dice2 === 4){
//   document.querySelector(".dice .img2").setAttribute("src" , "images/dice4.png");
// }
// else if (dice2 === 5){
//   document.querySelector(".dice .img2").setAttribute("src" , "images/dice5.png");
// }
// else{
//   document.querySelector(".dice .img2").setAttribute("src" , "images/dice6.png");
// }


//changing the title of the page to show who is the winner
// if (dice1 > dice2){
//   document.querySelector("h1").textContent = "Player 1 is the winner !";
// }
// else if (dice1 < dice2){
//   document.querySelector("h1").textContent = "Player 2 is the winner !";
// }
// else{
//   document.querySelector("h1").textContent = "Draw !";
// }
