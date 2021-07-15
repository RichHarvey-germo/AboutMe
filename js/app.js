'use strict';

const defaultResponse = 'Hey! That isn\'t right! Try again!';

let guestName = promt('Hello! What\'s your name?');
console.log('Guests name is ${guestName}');
alert('Thanks for coming, ${guestName}');


// ask question
//q 1
function richFirstName() {
  let richFirstName = prompt('Yes/No: The page creators first name is Rich?');
  console.log(`Q 1 answer: ${richFirstName}`);
  switch (richFirstName.toLowerCase()) {
    case 'y':
    case 'yes':
      var response = 'That is correct! Its Rich';
      alert(response);
      console.log(response);
      break;
    case 'n':
    case 'no':
      var response = 'That ain\'t right yo! Its Rich!';
      alert(response);
      console.log(response);
      break;

    default:
      alert(defaultResponse);
      console.log(defaultResponse);
      break;
  }
}
richFirstName()

//q 2
function richMilService() {
  let richMilService = prompt('Yes/No: Is/Was in the US Army?');
  console.log(`Q 2 answer: ${richMilService}`);
  switch (richMilService.toLowerCase()) {
    case 'y':
    case 'yes':
      var response = 'Thats right! Rich was a soldier in the army! Its Rich!';
      alert(response);
      console.log(response);
      break;

    case 'n':
    case 'no':
      var response = 'Nah fam! Try again!';
      alert(response);
      console.log(response);
      break;
  }
}
richMilService()

//q 3
function richStarWars() {
  let richStarWars = prompt('Yes/No: Does Rich like/love Star Wars???');
  console.log(`Q 3 answer: ${richStarWars}`);
  switch (richStarWars.toLocaleLowerCase()) {
    case 'y':
    case 'yes':
      var response = 'The force is stong with you';
      alert(response);
      console.log(response);
      break;

    case 'n':
    case 'no':
      var response = 'These aren\'t the droids you\'re looking for!';
      alert(response);
      console.log(response);
      break;
  }
}
richStarWars()

//q 4
let richJob = prompt('Yes/No: Is Rich employed currently?');
console.log(`Q 4 answer: ${richJob}`);
switch (richJob.toLowerCase()) {
  case 'y':
  case 'yes':
    var response = 'This lazy bum agrees!';
    alert(response);
    console.log(response);
    break;
  case 'n':
  case 'no':
    var response = 'No no no '
    alert(response);
    console.log(response);
    break;
}

//q 5
let richTats = prompt('Yes/No: Do I have any tattoos?');
console.log(`Q 5 answer: ${richTats}`);
switch (richTats.toLowerCase()) {
  case 'y':
  case 'yes':
    var response = ''
}