var jsonQuiz = [];
var operatorNeeded = ["+", "-", "*", "/"];
var firstOprand, secondOprand, oprator, timerSecond = 30, timerVar, queNum, score = 0, totalQue = 20;

var quiz = new quizDisplay();
window.onload = function(){
  nextQue = document.getElementById('nextQue');
  nextQue.addEventListener("click", quiz.fetchAnswer);
  quiz.makeQuiz();
}
function quizDisplay(){
  var objScope = this;
  //to make a quiz of 20 question and store it in a json..
  this.makeQuiz = function(){
    for (var i = 0; i < totalQue; i++){
      firstOprand = Math.floor((Math.random()*20)+1);
      secondOprand = Math.floor((Math.random()*20)+1);
      oprator = operatorNeeded[Math.floor(Math.random()*4)];
      var question = firstOprand + " " + oprator + " " + secondOprand;
      var correctAns = this.getCorrectAns();
      jsonQuiz[i]={'question' : question, 'correctAns' : correctAns, 'userAns' : NaN}
    }
    queNum = 0;
    this.displayQue(0);    
  }
  //to display the quiz question..
  this.displayQue = function(num){
    this.startTimer();
    document.getElementById('displayQue').innerHTML = "Que " + ++queNum +  ":" + jsonQuiz[num].question + " ?";
    document.getElementById('answer').value = "";
    document.getElementById('showScore').innerHTML = "Score is : " + score;
  }
  //to get the correct answer
  this.getCorrectAns = function(){
    switch(oprator){
      case ("+"):
      return (firstOprand+secondOprand);
      break;

      case ("-"):
      return (firstOprand-secondOprand);
      break;

      case ("*"):
      return (firstOprand*secondOprand);
      break;
      
      case ("/"):
      return parseFloat(firstOprand/secondOprand).toFixed(2);
      break;

      default:
      return NaN;
    }
  }
  //to fetch the answer inputed by the user
  this.fetchAnswer = function (){
    var input = document.getElementById('answer').value;
    var corrAns = jsonQuiz[queNum-1].correctAns;
    jsonQuiz[queNum-1].userAns = input;
    if (input == corrAns){
      score++;
    }
    if(queNum >= totalQue){
      document.getElementById('displayQue').innerHTML = "Score is : " + score + " out of " + totalQue + ".";
      objScope.displayWrongAnswers();
    }
    else{
      clearInterval(timerVar);
      objScope.displayQue(queNum);
    }
  }
  //function to display the wrong and unattempted answer after completion of test.
  this.displayWrongAnswers = function (){
    for(var i = 0; i < (queNum); i++){
      if(jsonQuiz[i].correctAns !=  jsonQuiz[i].userAns){
        var row = document.createElement("tr");
        var cell1 = row.appendChild(document.createElement("td"));
        cell1.appendChild(document.createTextNode(jsonQuiz[i].question + " ?"));
        var cell2 = row.appendChild(document.createElement("td"));
        cell2.appendChild(document.createTextNode(jsonQuiz[i].userAns));
        var cell3 = row.appendChild(document.createElement("td"));
        cell3.appendChild(document.createTextNode(jsonQuiz[i].correctAns));
        var table = document.getElementById('wrongAns');
        table.appendChild(row);
      }
    }
    clearInterval(timerVar);
    document.getElementById('replace').style.display = "none";
    document.getElementById('containerAns').style.display = "block";
  }
  //funtion to start the timer..
  this.startTimer = function(){
    timerSec = timerSecond;
    timerVar = setInterval(function(){
      document.getElementById('displayTimer').innerHTML = "Timeleft : " + timerSec-- + " sec";
      if(timerSec == -1){
        alert("time out page redireting to next que");
        quiz.fetchAnswer();
      }
    },1000);
  }
}