var flag, windowDisp = document.getElementById('window');
//creating event handler for button click..
windowDisp.addEventListener( "click", createWindow);
// this function opens a window if the url is not empty...
function createWindow(){
  do{
    flag = true;
    var url = prompt("enter the url of window","xyz.html");
    if(url.trim() == "" && url != null){
      alert("please enter url");
      flag = false;
    }
    else{
      window.open(url, 'new_window', 'width=400px, height=350px, status=no, scrollbars=no, toolbar=no');
    }
  }while(!flag);
}
