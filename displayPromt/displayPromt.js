window.onload = function(){
  var flag;
  do{
    flag = true;
    var fName = prompt("Please enter your first name");
    if(fName == "" || fName.match(" ")){
      alert("enter a valid first name");
      flag = false;
    }
  }
  while(flag != true);

  do{
    flag = true;
    var lName = prompt("please enter your last name");
    if(lName == "" || lName.match(" ")){
     alert("enter a valid last name");
     flag = false;
    }
  }
  while(flag != true);
  if(fName != null || lName != null){
 document.getElementById("display").innerHTML="HELLO " + fName + "  " + lName;
  }
}