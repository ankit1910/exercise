//class for storing values...
function user(uName, uAge){
	this.name = uName;
	this.age = uAge;

  //function for comaring the ages...
  this.compare = function(userSec){
    if (this.age >= userSec.age) {
      alert(this.name + " is older than " + userSec.name);
    }
    else {
      alert(userSec.name + " is older than " + this.name);
    }
  }
}
//function call on button click compare... 
function assignValue(){
var p1Name = document.getElementById("first_name").value;
var p1Age = document.getElementById("first_age").value;
var firstPer = new user(p1Name, p1Age);

var p2Name = document.getElementById("second_name").value;
var p2Age = document.getElementById("second_age").value;
var secondPer = new user(p2Name, p2Age);

firstPer.compare(secondPer);
}