//lab assignment #1 javascript file
// //loop through each html id and prompt its question
for (i = 1; i < 2; i++) {
  var question = document.getElementById(""+i+"");
  answer = prompt(question.textContent).toLowerCase();
  
}
