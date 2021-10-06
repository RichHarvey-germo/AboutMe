'use strict';

alert('Come join us!!'); //alert for greeting
// eslint-disable-next-line no-var
var score = 0; //var for scoring
let userName = prompt('What is your name?');
console.log(userName);

alert('Welcome ' + userName + '! Have fun with this site!');

//q 1
let richFirstName = function() {
  let firstName = prompt('Is my first name Rich?');
  let name = firstName.toLowerCase();
  // eslint-disable-next-line eqeqeq
  if (name == 'y' || name == 'yes') {
    alert('That\'s correct');
    score++;
    return;
  }
  // eslint-disable-next-line eqeqeq
  if (name == 'n' || name == 'no') {
    alert('That is wrong');
    return;
  } else {
    alert('Nope. Try again!');
    return;
  }
};
richFirstName();

//q 2
let richMilService = function() {
  let milSerivce = prompt('Yes/No: Is/Was in the US Army?');
  let mil = milSerivce.toLowerCase();
  // eslint-disable-next-line eqeqeq
  if (mil == 'y' || mil == 'yes') {
    alert('That is correct!');
    return;
  }
  // eslint-disable-next-line eqeqeq
  if (mil == 'n' || mil == 'no') {
    alert('That is incorrect');
    score++;
    return;
  } else {
    alert('Nah fam. Try again');
    return;
  }
};
richMilService();

//q 3
let richStarWars = function() {
  let starWars = prompt('Do I like Star Wars?');
  let wars = starWars.toLowerCase();
  // eslint-disable-next-line eqeqeq
  if (wars == 'y' || wars == 'yes') {
    alert('That is correct!');
    score++;
    return;
  }
  // eslint-disable-next-line eqeqeq
  if (wars == 'n' || wars == 'no') {
    alert('That is incorrect');
    return;
  } else {
    alert('That wont work!');
    return;
  }
};
richStarWars();

//q 4
let richJob = function() {
  let jobs = prompt('Am I currently employed?');
  let joby = jobs.toLowerCase();
  // eslint-disable-next-line eqeqeq
  if (joby == 'y' || joby == 'yes') {
    alert('That is correct!');
    score++;
    return;
  }
  // eslint-disable-next-line eqeqeq
  if (joby == 'n' || joby == 'no') {
    alert('That is incorrect');
    return;
  } else {
    alert('Not an acceptable answer!');
    return;
  }
};
richJob();

//q 5
let richTats = function() {
  let richTats = prompt('Do I have tattoos?');
  let tats = richTats.toLowerCase();
  // eslint-disable-next-line eqeqeq
  if (tats == 'y' || tats == 'yes') {
    alert('Seems to be the correct answer, ' + userName + '!');
    score++;
    return;
  }
  // eslint-disable-next-line eqeqeq
  if (tats == 'n' || tats == 'no') {
    alert('naahhhh');
    return;
  } else {
    alert('Try that answer again');
    return;
  }
};
richTats();

// q 6
let multiGuess = function() {
  for (let i = 0; i < 4; i++) {
    let numb = 16;
    let guessNumber = prompt(
      'What\'s my favorite number? Its between 1 and 100.'
    );
    if (guessNumber < numb) {
      alert('Wrongo. Too Low!');
      console.log(guessNumber);
    }
    if (guessNumber > numb) {
      alert('Uh uh! Too High!');
      console.log(guessNumber);
    }
    // eslint-disable-next-line eqeqeq
    if (guessNumber == numb) {
      alert('Wow! We have a smart person here!!');
      score++;
      console.log(guessNumber);
      return;
    }
  }
  alert('You didn\'t say the magic word ' + userName + '!');
};
multiGuess();

//q 7
let multiChoice = function() {
  const multArray = [
    'Games',
    'FFXIV',
    'Tinder',
    'Star Wars books',
    'Board Games',
    'Trolling',
  ];
  for (let i = 0; i < 6; i++) {
    let multArrayQuest = prompt(
      'Welcome to the B-B-B-Bounus Round!! Guess a honny of mine!'
    );
    let correctQuest = multArrayQuest.toLowerCase();

    for (let i = 0; i < multArray.length; i++) {
      if (correctQuest == multArray[i].toLowerCase()) {
        score++;
        alert(
          'You got it ' +
            userName +
            '! You\'ve completed the Guessing Game! Good Job'
        );
        return;
      }
    }
    alert('Nope, nope, nope. Try again');
  }

  alert('Almost there. Try it out ' + userName + '!' + multArray);
};
multiChoice();

alert(
  'Thanks for playing ' +
    userName +
    '! Your final score is  ' +
    score +
    ' out of 7'
);

// eslint-disable-next-line no-debugger
debugger;
