var validateForm = document.getElementById('formSubmit');
//adding event handler on submitting the form...
validateForm.addEventListener("submit", checkFormValidate);

function checkFormValidate(event){
  var regex = /^[0-9]+$/;
  if(regex.test(document.getElementById('input').value)) {
    document.getElementById('output').value = 'true';
    alert("submitting form");
  }
  else{
    document.getElementById('output').value = 'false';
    event.preventDefault();
  }
}