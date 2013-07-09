//defining an object with multiple variables
var formFields = {
  validateForm: document.getElementById("validateForm"),
  login: document.getElementById("login"),
  email: document.getElementById("email"),
  name:  document.getElementById("name"),
  homePage: document.getElementById("homepage"),
  textArea: document.getElementById("aboutme"),
  recNotif: document.getElementById("notification")
}
//adding event handler
formFields.validateForm.addEventListener("submit", validFormFields);
//regular expressions
var testEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
var testHome = /^[a-z0-9._%-]+\.[a-z]{2,4}$/;

//function to validate form
function validFormFields(e){
  if(formFields.login.value == "" || formFields.login.value.match(" ")) {
    alert("login id is not correct");
  }  
	if(formFields.email.value == "" || !testEmail.test(formFields.email.value)){
    alert("please check email id");
  }  
  if(formFields.name.value == "") {
    alert("please enter name");
  }
  if(formFields.homePage.value == "" || !testHome.test(formFields.homePage.value)){
    alert("please check homepage url");
  }
  if (formFields.textArea.value.length <= 50 ) {
    alert("description should be in min 50 words");
  }
  if(formFields.recNotif.checked != true) {
    alert("you dont want to recieve notification?\n sure?");
  }
  e.preventDefault();
}