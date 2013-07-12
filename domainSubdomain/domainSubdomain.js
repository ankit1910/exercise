var regexDomain = /^(https?\:\/\/)?(www\.)?((\w+\.)*)((\w+)\.([a-z]{2,4}))\/?/i;

function checkUrl(formId) {
  this.formId = document.getElementById(formId);
  this.checkDomainSubDomain = function(event) {
    var domain = "", subDomain = "";
    var enteredUrl = document.getElementById('url').value.trim();
    if(regexDomain.test(enteredUrl)){
      domain = RegExp.$5;
      subDomain = RegExp.$3;
      if(subDomain == ""){
        alert("Domain name : " + domain );
      }
      else{
        alert("Domain name : " + domain + " \n SubDomain :  " + subDomain);
      }
    }
    else{
      alert("url format is invalid");
      event.preventDefault();
    }
    
  }
  this.formId.addEventListener("submit", this.checkDomainSubDomain);
}
var validUrl =new checkUrl('validateForm');