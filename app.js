//lab assignment #1 javascript file
// Creates array of correct possible answers for each question
var correctAnswers = [
                      ["yes", "y"],
                      ["no", "n"],
                      ["no", "n"],
                      ["no", "n"]
                                  ];
// Creates array of all user answers
var answers = [];
var correct = 0;
// prompt the user for his/her name for personalization later
var userName = prompt("What's your name?");
//loop through each html id and prompt its question
for (var i = 1; i < correctAnswers.length+1; i++) {
  var question = document.getElementById(""+i+"");
//store user input as lowercase via a prompt window
  answer = prompt(question.textContent).toLowerCase();
//check to see if user input is correct
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
