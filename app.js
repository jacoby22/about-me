//lab assignment #1 javascript file
// Creates array of correct possible answers for each question
var correctAnswers = [
                      ['yes', 'y'],
                      ['no', 'n'],
                      ['no', 'n'],
                      ['no', 'n'],
                      [47],
                      ['washington', ' california', ' idaho', ' florida', ' illinois', ' oregon']];
// Creates array of all user answers
var answers = [];
var correct = 0;
var userName;

function getUserName() {
  // prompt the user for his/her name for personalization later
  userName = prompt('What\'s your name?');
  answers.push(userName);
  //loop through each html id and prompt its question
}
getUserName();

function askYorNoQuestions() {
  for (var i = 1; i < 5; i++) {
    var question = document.getElementById('' + i + '');
    //store user input as lowercase via a prompt window
    answer = prompt(question.textContent).toLowerCase();
  //logs user answer for debugging code
    console.log(answer);
  //logs array of possible answers for debugging code
    console.log(correctAnswers[i]);
  //check to see if user input is one of possible correct answers
    if (correctAnswers[i - 1].indexOf(answer) === -1) {
  //alert user if response is incorrect
      alert('Sorry, that\'s not correct! Come on ' + userName + '!');
  //store response value
      answers.push(answer);
    }
    else {
  //alert user if response is correct
      alert('Correct!');
  //store response value
      answers[i - 1] = answer;
      correct += 1;
    }
  }
}

//variable for storing the allowable number of user guesses

function guessingGameQuestions(allowedGuesses) {
  var question5 = document.getElementById(5);
  for (var j = 0; j < allowedGuesses; j++) {
  //cast user input into an integer for comparing against stored correct int value
    var userGuess = parseInt(prompt(question5.textContent));
    answers.push(userGuess);
  //check if user guess is equal to stored array value
    if (userGuess === correctAnswers[4][0]) {
      alert('Correct! You have guessed the magic number.');
      correct += 1;
      break;
  //console log the user's guess for easier debugging
      console.log(userGuess);
    }
  //check if user guess is higher than stored correct int value
    else if (userGuess > correctAnswers[4][0]){
      alert('Incorrect! You\'re guess was a little high. \nYou have ' + (allowedGuesses - (j + 1)) + ' guesses remaining.');
    }
    else {
      alert('Incorrect! You\'re guess was a little low. \nYou have ' + (allowedGuesses - (j + 1)) + ' guesses remaining.');
    }
  }
}

//store a new value for allowedGuesses for question 6

function statesGameQuestions(allowedGuesses2) {
  var question6 = document.getElementById(6);
  for (var k = 0; k < allowedGuesses2; k++) {
  //get user input and force it to lower case to match array answers
    var userGuess2 = prompt(question6.textContent).toLowerCase();
    answers.push(userGuess2);
    if (correctAnswers[5].indexOf(userGuess2) === -1) {
      alert('Incorrect! I\'ve never been to ' + userGuess2 + '.\nYou have ' + (allowedGuesses2 - (k + 1)) + ' guesses remaining.');
    }
    else {
      alert('Correct! I have travelled to ' + userGuess2 + '.');
      correct += 1;
      break;
    }
  }
}

//tell user possible answers they could have chosen
alert('These are the states you could have selected:\n' + correctAnswers[5]);
//tell user how many they were able to answer correctly and thank them by name for playing the game
alert('You were able to get ' + correct + ' answers correct. \nThanks for playing ' + userName + '!');
//call functions in order intended occurrence for website
askYorNoQuestions();
guessingGameQuestions(4);
statesGameQuestions(6);
