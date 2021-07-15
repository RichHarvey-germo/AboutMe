'use strict';

const defaultResponse = 'Hey! That isn\'t right! Try again!';

let guestName = promt('Hello! What\'s your name?');
console.log('Guests name is ${guestName}');
alert('Thanks for coming, ${guestName}');


// ask question
//q 1
let richFirstName = prompt('Yes/No: The page creators first name is Rich?');
console.log('Q 1 answer: ${richFirstName}');
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

//q 2
let richMilService = prompt('Yes/No: Is/Was in the US Army?');
console.log('Q 2 answer: ${richMilService}');
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

//q 3
let richStarWars = prompt('Yes/No: Does Rich like/love Star Wars???');
console.log('Q 3 answer: ${richStarWars}');
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


//q 4
let richJob = prompt('Yes/No: Is Rich employed currently?');
console.log('Q 4 answer: ${richJob}');
switch (richJob.toLocaleLowerCase()) {
  case 'y':
  case 'yes':
    var response = 'This lazy bum agrees!';
    alert(response);
    console.log(response);
    break;
  case 'n':
  case 'no':
    var response = ''
}