'use strict';

const defaultResponse = 'Hey! That isn\'t right! Try again!';

let guestName = promt('Hello! What\'s your name?');
console.log('Guests name is ${guestName}');
alert('Thanks for coming, ${guestName}');


// ask question
//q 1
let richFirstName = promt('Yes/No: The page creators first name is Rich?');
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