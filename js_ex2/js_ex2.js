//global variables
var dispDays = " are ", countSel = 0;
// function to max check 3 checkbox
function checkMax_3(currentCheckBox){
  if(currentCheckBox.checked == true){
    countSel++;
    //to check the max limit of checkbox
    if(countSel == 4){
      alert("you can't select more than 3 check box.\n you already had seleted:" + dispDays);
      currentCheckBox.checked = false;
    }
    dispDays += currentCheckBox.getAttribute('value');
    dispDays += " ";
  }
  //if the check box is deselected after selecting
  if(currentCheckBox.checked == false){
    countSel--;
    var subStr = currentCheckBox.getAttribute('value');
    dispDays = dispDays.replace(subStr + ' ',"");
  }
  // deseleting check none checkbox on clicking first element
  if(countSel == 1){
    document.getElementsByName('check_none')[0].checked = false;
  }
}
//funtion for deseleting all the checkboxes
function checknone(){
  countSel = 0;
  dispDays = " are ";
  var check_box = document.getElementsByName('color');
  for (var i = 0; i < check_box.length; i++) { 
    //checking currentCheckBoxect is checkbox type or not
    if (check_box[i].type == 'checkbox') {
      check_box[i].checked = false;
    }
  }
}
