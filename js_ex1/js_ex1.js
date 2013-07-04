
// function to check and uncheck all
// arg hold name of checkbox 
// status hold the boolean value upon which function has to be performed
function invert_sel(nameCheck, status)                        
{
  var check_box = {};
  var check_box = document.getElementsByName(nameCheck);               
  //for traversing each child
  for(var i = 0; i < check_box.length; i++) {
    //for checking type of nodes
    if(check_box[i].type == 'checkbox') { 
      check_box[i].checked = status;
    }
    else{
      alert("error--'checked value out of domain'")
    }   
  }
  return false;
}