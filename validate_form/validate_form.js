
var validateForm = document.getElementById("validateForm");
//adding event handler
validateForm.addEventListener("submit", validFormFields);
var formFields = document.getElementsByClassName('field');
function validFormFields(e){
    for(var i = 0; i < 4; i++){
      if(formFields[i].value.trim() == ""){
      alert("please check " + formFields[i].id + " field");
      e.preventDefault();
      return ;
      }
    }
  if(document.getElementById('aboutme').value.trim() < 50){
    alert(" the length of about me field should be atleast 50");
    e.preventDefault();
    return ;
  }
  if(!document.getElementById('notification').checked){
    alert("are you sure you dont want to recieve notification");
    e.preventDefault();
  }
}