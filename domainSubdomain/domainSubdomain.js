var regexDomain = /^(https?\:\/\/)?(www\.)?((\w+\.)*)((\w+)\.([a-z]{2,4}))\/?/i;

function urlValidate(formId) {
  this.validateForm = document.getElementById(formId);
  this.checkDomainSubDomain = function(event) {
    var domain = "", subDomain = "";
    var valueUrlEnter = document.getElementById('url').value;
    valueUrlEnter = valueUrlEnter.trim();
    if(regexDomain.test(valueUrlEnter)){
      domain = RegExp.$5;
      subDomain = RegExp.$3;
      if(subDomain == ""){
        alert("Domain name : " + domain );
      }
      else
        alert("Domain name : " + domain + " \n SubDomain :  " + subDomain);
    }
    else{
      alert("url format is invalid");
    }
    event.preventDefault();
  }
  this.validateForm.addEventListener("submit", this.checkDomainSubDomain);
}
var validUrl =new urlValidate('validateForm');