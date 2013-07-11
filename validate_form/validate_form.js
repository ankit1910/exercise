//defining an object with multiple variables
var validateForm = document.getElementById("validateForm");
var formFields = {  
  login: document.getElementById("login"),
  email: document.getElementById("email"),
  name:  document.getElementById("name"),
  homePage: document.getElementById("homepage"),
  textArea: document.getElementById("aboutme"),
  recNotif: document.getElementById("notification")
}
//adding event handler
validateForm.addEventListener("submit", validFormFields);
//regular expressions
var testEmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w{2,4}$/;
var testHome = /^[a-z0-9._%-]+\.[a-z]{2,4}$/;

//function to validate form
function validFormFields(e){
  if(formFields.login.value == "" || formFields.login.value.match(" ")) {
    alert("login id is not correct");
  }
  if(formFields.email.value.trim() == ""){
    alert("you forgot the email id");
  }
  else if(!testEmail.test(formFields.email.value)){
    alert("please check email id");
  }  
  if(formFields.name.value.trim() == "") {
    alert("please enter name");
  }
  if(formFields.homePage.value.trim() == ""){
    alert("you forgot the home page url");
  }
  else if(!testHome.test(formFields.homePage.value)){
    alert("please check homepage url");
  }
  if (formFields.textArea.value.trim().length <= 50 ) {
    alert("description should be in min 50 words");
  }
  if(formFields.recNotif.checked != true) {
    alert("you dont want to recieve notification?\n sure?");
  }
  e.preventDefault();
}