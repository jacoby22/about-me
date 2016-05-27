//lab assignment #1 javascript file

var answers = [];
// //loop through each html id and prompt its question
for (i = 1; i < 5; i++) {
  var question = document.getElementById(""+i+"");
  answer = prompt(question.textContent).toLowerCase();
  if (answer != 'yes' && answer != 'no' && answer != 'y' && answer != 'n') {
    alert("Hey, that's not a valid response!");
    answers[i-1] = false;
  }
  else {
    answers[i-1] = answer;
  }
}
