var flag, windowDisp = document.getElementById('window');
//creating event handler for button click..
windowDisp.addEventListener( "click", createWindow);
// this function opens a window if the url is not empty...
function createWindow(){
  do{
    flag = true;
    var url = prompt("enter the url of window","xyz.html");
    if(url == ""){
      alert("please enter url");
      flag = false;
    }
    else{
      // to check weather user clicked cancel.
      if(url != null){
      window.open(url, 'new_window', 'width=400px, height=350px, status=no, scrollbars=no, toolbar=no');
      }
    }
  }
  while(flag != true);
}