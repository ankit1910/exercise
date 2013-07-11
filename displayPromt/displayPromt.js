//function with call on loading of window
window.onload = function(){
  var flag, fName = "", lName = "";
  // repeat until we get the proper first name
  fName = promptName("first");
  lName = promptName("last");

  function promptName(obj){
    do{
      flag = true;
      var Name = prompt("Please enter your " + obj + " name");
        if(Name.trim() == ""){
        alert("enter a valid " + obj + " name");
        flag = false;
      }
    }while(flag != true);
    return Name;
  } 
  //for checking that user click cancel on prompt window
  if(fName != null || lName != null){
    document.write("HELLO " + fName + "  " + lName);
  }
}