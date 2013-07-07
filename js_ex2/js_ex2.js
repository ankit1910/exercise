var dispDays = [];
// function to max check 3 checkbox
function checkMax_3(currentCheckBox){  
  if(currentCheckBox.checked == true){
    //to check the max limit of checkbox
    if(dispDays.length == 3){
      currentCheckBox.checked = false;
      alert("you can't select more than 3 check box.\n seleted days are:" + dispDays);

    }
    var day = currentCheckBox.value;    
    dispDays.push(day);
  }
  //if the check box is deselected after selecting
  if(currentCheckBox.checked == false){
    dispDays.splice(dispDays.indexOf(currentCheckBox.value), 1);
  }
  // deseleting check none checkbox on clicking first element
  if(document.getElementById("checknone").checked == true){
    document.getElementById("checknone").checked = false;
  }    
}
//funtion for deseleting all the checkboxes
function checknone(){
  dispDays = [] ;
  var check_box = document.getElementsByName('color');
  for (var i = 0; i < check_box.length; i++) { 
    //checking currentCheckBoxect is checkbox type or not
    if (check_box[i].type == 'checkbox') {
      check_box[i].checked = false;
    }
  }
}