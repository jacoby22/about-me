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

for (var i = 1; i < 5; i++) {
  var question = document.getElementById(''+i+'');
  //store user input as lowercase via a prompt window
  answer = prompt(question.textContent).toLowerCase();
//logs user answer for debugging code
  console.log(answer);
//logs array of possible answers for debugging code
  console.log(correctAnswers[i]);
//check to see if user input is one of possible correct answers
  if (correctAnswers[i-1].indexOf(answer) === -1) {
//alert user if response is incorrect
    alert('Sorry, that\'s not correct! Come on ' + userName + '!');
//store response value
    answers.push(answer);
  }
  else {
//alert user if response is correct
    alert('Correct!');
//store response value
    answers[i-1] = answer;
    correct += 1;
  }
}
//variable for storing the allowable number of user guesses
var allowedGuesses = 4;
var question5 = document.getElementById(5);
for (var i = 0; i < allowedGuesses; i++) {
//cast user input into an integer for comparing against stored correct int value
  var userGuess = parseInt(prompt(question5.textContent));
  answers.push(userGuess);
//check if user guess is equal to stored array value
  if (userGuess === correctAnswers[4][0]) {
    alert('Correct! You have guessed the magic number.')
    correct += 1;
    break;
//console log the user's guess for easier debugging
  console.log(userGuess);
  }
//check if user guess is higher than stored correct int value
  else if (userGuess > correctAnswers[4][0]){
    alert('Incorrect! You\'re guess was a little high. \nYou have ' + (allowedGuesses - (i+1)) + ' guesses remaining.');
  }
  else {
    alert('Incorrect! You\'re guess was a little low. \nYou have ' + (allowedGuesses - (i+1)) + ' guesses remaining.');
  }
}
//store a new value for allowedGuesses for question 6
var allowedGuesses = 6;
var question6 = document.getElementById(6);
for (var i = 0; i < allowedGuesses; i++) {
//get user input and force it to lower case to match array answers
  var userGuess = prompt(question6.textContent).toLowerCase();
  answers.push(userGuess);
  if (correctAnswers[5].indexOf(userGuess) === -1) {
    alert('Incorrect! I\'ve never been to ' + userGuess + '.\nYou have '+ (allowedGuesses - (i+1)) + ' guesses remaining.');
  }
  else {
    alert('Correct! I have travelled to ' + userGuess + '.');
    correct += 1;
    break;
  }
}
console.log(answers);
console.log(correct);
//tell user possible answers they could have chosen
alert('These are the states you could have selected:\n' + correctAnswers[5]);
//tell user how many they were able to answer correctly and thank them by name for playing the game
alert('You were able to get ' + correct + ' answers correct. \nThanks for playing ' + userName + '!');
