//defining an object with multiple variables
var form = {
  validate:   document.getElementById("validate"),
  login:      document.getElementById("login"),
  email:      document.getElementById("email"),
  name:       document.getElementById("name"),
  homePage:   document.getElementById("homepage"),
  textArea:   document.getElementById("aboutme"),
  recNotif:   document.getElementById("notification")
}
//adding event handler
form.validate.addEventListener("submit", validForm);
//regular expression
var testEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
var testHome = /^[a-z0-9._%-]+\.[a-z]{2,4}$/;

//function to validate form
function validForm(e){
  if(form.login.value == ""){
    alert("login id can't be empty");
  }
  
	if(!testEmail.test(form.email.value)){
    alert("please check email id");
  }
  
  if(form.name.value == ""){
    alert("please enter name");
  }

  if(!testHome.test(form.homePage.value)){
    alert("please check homepage url");
  }

  if (form.textArea.value.length <= 50 ) {
    alert("description should be in min 50 words");
  }

  if(form.recNotif.checked != true)
  {
    alert("you dont want to recieve notification?\n sure?")
  }

  e.preventDefault();
}