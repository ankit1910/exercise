function check(arg,status)                        // function to check and uncheck all
{
  var check_box= new Array(); 
  check_box= document.getElementsByName(arg);               
  if(status==true)                                //for checking all checkbox
  {
    for (var i=0; i<check_box.length; i++)        //traversing each child of list
    {
      if (check_box[i].type == 'checkbox')   
      { 
        check_box[i].checked = true;
      }
    }
  }
  else if(status==false)                         //for checking all checkbox
  {
    for (var i=0; i<check_box.length; i++)       //traversing each child of list
    {
      if (check_box[i].type == 'checkbox')   
      {
        check_box[i].checked = false;
      }
    }
  }
  else
  {
    alert("error checked value out of domain")
  }   
}