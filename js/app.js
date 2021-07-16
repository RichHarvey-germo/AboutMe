"use strict";

const defaultResponse = "Hey! That isn't right! Try again!";
var score = 0;

let guestName = promt("Hello! What's your name?");
console.log("Guests name is ${guestName}");
alert("Thanks for coming, ${guestName}");

// ask question
//q 1
function richFirstName() {
  let richFirstName = prompt("Yes/No: The page creators first name is Rich?");
  console.log(`Q 1 answer: ${richFirstName}`);
  switch (richFirstName.toLowerCase()) {
    case "y":
    case "yes":
      var response = "That is correct! Its Rich";
      alert(response);
      score++
      console.log(response);
      break;
    case "n":
    case "no":
      var response = "That ain't right yo! Its Rich!";
      alert(response);
      console.log(response);
      break;

    default:
      alert(defaultResponse);
      console.log(defaultResponse);
      break;
  }
}
richFirstName();

//q 2
function richMilService() {
  let richMilService = prompt("Yes/No: Is/Was in the US Army?");
  console.log(`Q 2 answer: ${richMilService}`);
  switch (richMilService.toLowerCase()) {
    case "y":
    case "yes":
      var response = "Thats right! Rich was a soldier in the army! Its Rich!";
      alert(response);
      score++
      console.log(response);
      break;

    case "n":
    case "no":
      var response = "Nah fam! Try again!";
      alert(response);
      console.log(response);
      break;
  }
}
richMilService();

//q 3
function richStarWars() {
  let richStarWars = prompt("Yes/No: Does Rich like/love Star Wars???");
  console.log(`Q 3 answer: ${richStarWars}`);
  switch (richStarWars.toLocaleLowerCase()) {
    case "y":
    case "yes":
      var response = "The force is stong with you";
      alert(response);
      score++
      console.log(response);
      break;

    case "n":
    case "no":
      var response = "These aren't the droids you're looking for!";
      alert(response);
      console.log(response);
      break;
  }
}
richStarWars();

//q 4
function richJob() {
  let richJob = prompt("Yes/No: Is Rich employed currently?");
  console.log(`Q 4 answer: ${richJob}`);
  switch (richJob.toLowerCase()) {
    case "y":
    case "yes":
      var response = "This lazy bum agrees!";
      alert(response);
      score++
      console.log(response);
      break;
    case "n":
    case "no":
      var response = "No no no ";
      alert(response);
      console.log(response);
      break;
  }
}
richJob();

//q 5
function richTats(){
let richTats = prompt("Yes/No: Do I have any tattoos?");
console.log(`Q 5 answer: ${richTats}`);
switch (richTats.toLowerCase()) {
  case "y":
  case "yes":
    var response = "You got the power!";
    alert(response);
    score++
    console.log(response);
    break;
  case "n":
  case "no":
    var response = "But why you wroooong??";
    alert(response);
    console.log(response);
    break;
}
}
richTats();

//q 6
function multiGuess(){
  for (let i = 0; i < 4; i++) {
    let numb=16
    let guessNumber = prompt('What\'s my favorite number? Its between 1 and 100.');
    if (guessNumber < numb) {
      alert("Wrongo. Too Low!");
      console.log(guessNumber)
    }
    if (guessNumber > numb) {
      alert("Uh uh! Too High!");
      console.log(guessNumber)
    }
    if (guessNumber == numb) {
      alert("Wow! We have a smart person here!!");
      score++
      console.log(guessNumber)
      return;
    }
  }
  alert("You didn\'t say the magic word " + userName + "!");
}
multiGuess()

//q 7
function multiChoice(){
  const multArray =["Games", "FFXIV", "Tinder", "Star Wars books", "Board Games", "Trolling"];
  for ( let i = 0; i < 6; i++){

    var multArrayQuest = prompt("Welcome to the B-B-B-Bounus Round!! Guess a honny of mine!");
    var correctQuest =  multArrayQuest.toLowerCase()
    
    for ( let i = 0; i < multArray.length; i++){
      if ( correctQuest == multArray[i].toLowerCase()){
        score++
        alert("You got it " + userName + "! You've completed the Guessing Game! Good Job");
        return; 
      }
    }
    alert("Nope, nope, nope. Try again")
  }

  alert("Almost there. Try it out " + userName + "!" + multArray)
}