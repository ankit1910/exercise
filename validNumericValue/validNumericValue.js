var regex = /^[-+]?(\d+)\.?(\d+)$/;

function validate(formId) {
  this.validateForm = document.getElementById(formId);
  this.checkFormValidate = function(event){
    if(regex.test(document.getElementById('input').value)) {
      document.getElementById('output').value = 'true';
      alert("form submitting");
    }
    else {
      document.getElementById('output').value = 'false';
      event.preventDefault();
    }
  }
  //adding event handler on submitting the form...
  this.validateForm.addEventListener("submit", this.checkFormValidate);
}
var validNumeric = new validate('formSubmit');
