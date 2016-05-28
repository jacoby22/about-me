//lab assignment #1 javascript file
// Creates array of correct possible answers for each question
var correctAnswers = [
                      ["yes", "y"],
                      ["no", "n"],
                      ["no", "n"],
                      ["no", "n"],
                      [47]
                                  ];
// Creates array of all user answers
var answers = [];
var correct = 0;
// prompt the user for his/her name for personalization later
var userName = prompt("What's your name?");
//loop through each html id and prompt its question
for (var i = 1; i < 5; i++) {
  var question = document.getElementById(""+i+"");
//store user input as lowercase via a prompt window
  answer = prompt(question.textContent).toLowerCase();
//logs user answer for debugging code
  console.log(answer);
//logs array of possible answers for debugging code
  console.log(correctAnswers[i]);
//check to see if user input is one of possible correct answers
  if (correctAnswers[i-1].indexOf(answer) === -1) {
//alert user if response is incorrect
    alert("Sorry, that's not correct! Come on " + userName + "!");
//store response value
    answers[i-1] = answer;
  }
  else {
//alert user if response is correct
    alert("Correct!");
//store response value
    answers[i-1] = answer;
    correct += 1;
  }
}
//variable for storing the allowable number of user guesses
var allowedGuesses = 4;
var question5 = document.getElementById(""+i+"");
for (var i = 0; i < allowedGuesses; i++) {
//cast user input into an integer for comparing against stored correct int value
  var userGuess = parseInt(prompt(question5.textContent));
//check if user guess is equal to stored array value
  if (userGuess === correctAnswers[4][0]) {
    alert("Correct! You have guessed the magic number.")
    correct += 1;
    break;
//console log the user's guess for easier debugging
  console.log(userGuess);
  }
//check if user guess is higher than stored correct int value
  else if (userGuess > correctAnswers[4][0]){
    alert("Incorrect! You're guess was a little high. \nYou have " + (allowedGuesses - (i+1)) + " guesses remaining.");
  }
  else {
    alert("Incorrect! You're guess was a little low. \nYou have " + (allowedGuesses - (i+1)) + " guesses remaining.");
  }
}
