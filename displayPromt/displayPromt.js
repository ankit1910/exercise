//function with call on loading of window
window.onload = function(){
  var flag;
  // repeat until we get the proper first name
  do{
    flag = true;
    var fName = prompt("Please enter your first name");
    if(fName == "" || fName.match(" ")){
      alert("enter a valid first name");
      flag = false;
    }
  }
  while(flag != true);
  // repeat until we get the proper last name
  do{
    flag = true;
    var lName = prompt("please enter your last name");
    if(lName == "" || lName.match(" ")){
     alert("enter a valid last name");
     flag = false;
    }
  }
  while(flag != true);
  //for checking that user click cancel on prompt window
  if(fName != null || lName != null){
    document.getElementById("display").innerHTML="HELLO " + fName + "  " + lName;
  }
}