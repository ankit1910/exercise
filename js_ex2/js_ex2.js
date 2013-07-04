// function to check atmost three checkbox
// obj argument refer to current child of chekbox list
function check(obj)       
{
  // deselect checknone onchecking others
  document.getElementsByName('check_none')[0].checked = false;        
  var count = 0, disp = " are ", check_sel = document.getElementsByName('color');
  
  for (var i = 0; i < check_sel.length; i++)
  { 
    if(check_sel[i] != obj)
    {
      if (check_sel[i].checked == true && count ++<= 2) 
      {
        disp += check_sel[i].getAttribute('value');
        disp += "  ";
      }
    }
  }
  //alert when there is attempt to check the 4th checkbox
  if(count >= 3)          
  {
    alert("you can't select more than 3 check box.\n you already had seleted:" + disp);
    obj.checked = false;
  } 
}

//funtion for deseleting all the checkboxes
// arg hold name of checkbox 
function checknone(arg)   
{
  var check_box = document.getElementsByName(arg);
  for (var i = 0; i < check_box.length; i++)  
  { 
    //checking object is checkbox type or not
    if (check_box[i].type == 'checkbox')   
    {
      check_box[i].checked = false;
    }
  }
}
