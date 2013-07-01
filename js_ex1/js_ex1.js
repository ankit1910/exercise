function check(arg,status) 
{
  var check_box= new Array(); 
  check_box= document.getElementsByName(arg);
  
  if(status==true)
  {
  for (var i=0; i<check_box.length; i++)  
   {
    if (check_box[i].type == 'checkbox')   
     {check_box[i].checked = true;}
   }
 }
  else if(status==false)
    {
  for (var i=0; i<check_box.length; i++)  
   {
    if (check_box[i].type == 'checkbox')   
     {check_box[i].checked = false;}
   }
  }
  else
      {alert("error checked value out of domain")}
   
}