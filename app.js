//lab assignment #1 javascript file

var answers = [];
//loop through each html id and prompt its question
for (i = 1; i < 5; i++) {
  var question = document.getElementById(""+i+"");
//store user input as lowercase via a prompt window
  answer = prompt(question.textContent).toLowerCase();
//check to see if user input is acceptable per project specifications
  if (answer != 'yes' && answer != 'no' && answer != 'y' && answer != 'n') {
//alert user if response is invalid
    alert("Hey, that's not a valid response!");
//store value as false if response is invalid
    answers[i-1] = false;
  }
  else {
//store response value if valid
    answers[i-1] = answer;
  }
}
