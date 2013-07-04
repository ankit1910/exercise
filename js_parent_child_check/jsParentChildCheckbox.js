
function checkAllChild(dispInnerBox){
	var divInner = document.getElementById(dispInnerBox);
	var childList = document.getElementsByName(dispInnerBox);
  
  if(divInner.style.display == 'block'){
    for(i = 0;i < childList.length; i++) {
      childList[i].checked = false;
    }
    divInner.style.display = 'none';
  }
  else{
    divInner.style.display = 'block';
    for(i = 0;i < childList.length; i++) {
      childList[i].checked = true;
    }
  }
  document.getElementById(dispInnerBox +'1').scrollIntoView(true);
}