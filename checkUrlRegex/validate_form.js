var reEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
var reUrl = /((http|ftp|https):\/\/)?(w{3}\.)?([a-zA-Z]+\.)+([a-zA-Z0-9]{2,4})+[\/]?([\w\-\.,@?^=%&amp;:~\+#])+$/;

var validateForm = document.getElementById("validateForm");
//adding event handler
validateForm.addEventListener("submit", validFormFields);
var formFields = document.getElementsByClassName('field');
function validFormFields(eNode){
  var flag = true;
  for(var i = 0; i < formFields.length ; i++){
    if(formFields[i].value.trim() == ""){
      alert("please check " + formFields[i].id + " field");
      eNode.preventDefault();
      return ;
    }
  }
  //chek field through regex expresssion....
  checkPattern(document.getElementById('email'), reEmail, eNode);
  checkPattern(document.getElementById('homepage'), reUrl, eNode);

  if(document.getElementById('aboutme').value.length <= 50){
    alert(" the length of about me field should be atleast 50");
    eNode.preventDefault();
    return ;
  }
  if(!document.getElementById('notification').checked){
    var confirmNotif = confirm("are you sure you dont want to recieve notification");
    if(!confirmNotif){
      eNode.preventDefault();
    }
  }
}
function checkPattern(nodeTOcheck, regex, e){
  if(!regex.test(nodeTOcheck.value)){
    alert("the " + nodeTOcheck.id + " field in invalid");
    e.preventDefault();
  }
}
