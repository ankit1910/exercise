function check(obj)
{
  document.getElementsByName('cn')[0].checked=false;
  var count=0, disp= " are ", check_sel=document.getElementsByName('color');
  
for (var i = 0; i<check_sel.length; i++)
{ 
if(check_sel[i]!= obj)
 {
  if (check_sel[i].checked==true && count++<=2) 
  {
    disp+=check_sel[i].getAttribute('value');
    disp+= " ";
  }
 }
}

 if(count>=3)
  { alert("you can't select more than 3 check box.\n you already had seleted:" + disp);
    obj.checked=false;
  } 
}

function checknone(arg)
 {
  var check_box= document.getElementsByName(arg);

for (var i=0; i<check_box.length; i++)  
 { 
  if (check_box[i].type == 'checkbox')   
   {
    check_box[i].checked = false;
   }
 }
}
