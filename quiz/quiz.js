var operatorNeeded = ["+", "-", "*", "/"];
var firstOprand, secondOprand, oprator, timerSec, timerVar, score = 0, queNum = 0;
var wrongAnswerArray = [];

window.addEventListener("load", displayQue);
//function to display the main quiz page
function displayQue(eventDisp) {
  if(queNum < 20){
    firstOprand = Math.floor((Math.random()*20)+1);
    secondOprand = Math.floor((Math.random()*20)+1);
    oprator = operatorNeeded[Math.floor(Math.random()*4)];
    startTimer();
    document.getElementById('displayQue').innerHTML = "Que " + ++queNum +  ":" + "   " + firstOprand + " " + oprator + " " + secondOprand + "?"; 
    document.getElementById('answer').value = "";
    document.getElementById('showScore').innerHTML = "Score is : " + score;
  }
  //when number of que reaches 20
  else{
    document.getElementById('displayQue').innerHTML = "Score is : " + score + " out of 20.";
    displayWrongAnswers();
  }
}

var nextQue = document.getElementById('nextQue');
//function to fetch the correct answer and compare it with the enetered answer
nextQue.addEventListener("click", fetchAnswer);
function fetchAnswer(eventFetch) {
  var corrAns = correctAns();
  var input = document.getElementById('answer').value;
  var answer = parseFloat(input).toFixed(2);
  if( answer == corrAns && input != ""){
    score++;
  }
  else{
    wrongAnswerArray[queNum] = corrAns;
  }
  clearInterval(timerVar);
  displayQue();
}

//function to find out the correct answer for each ques.
function correctAns(){
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

//function to display the wrong and unattempted answer after completion of test.
function displayWrongAnswers(){
  for(var i = 0; i < (wrongAnswerArray.length); i++){
    if(wrongAnswerArray[i]){
      var row = document.createElement("tr");
      var cell1 = row.appendChild(document.createElement("td"));
      cell1.appendChild(document.createTextNode(i));
      var cell2 = row.appendChild(document.createElement("td"));
      cell2.appendChild(document.createTextNode(wrongAnswerArray[i]));
      var table = document.getElementById('wrongAns');
      table.appendChild(row);
    }
  }
  document.getElementById('replace').style.display = "none";
  document.getElementById('containerAns').style.display = "block";
}

//start the timer
function startTimer(){
  timerSec = 60;
  timerVar = setInterval(function(){
    document.getElementById('displayTimer').innerHTML = "Timeleft : " + timerSec-- + " sec";
    if(timerSec == -1){
      alert("time out page redireting to next que");
      fetchAnswer();
    }
  },1000);
} 
