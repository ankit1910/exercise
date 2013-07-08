var add = document.getElementById('add');
var remove = document.getElementById('remove');

//moving item from first selectbox to second selectbox...
add.addEventListener( "click", addToSecond);

function addToSecond(){
  //getting value of the selected option item	
  var firstBox = document.getElementById('first_box');
  var selectOption = firstBox.options[firstBox.selectedIndex];
  //adding that selected item to second select box...
  var secondBox = document.getElementById('second_box');
  var newOption = document.createElement("option");
  newOption.appendChild(document.createTextNode(selectOption.value));
  secondBox.appendChild(newOption);
  // removing from first checkbox
  firstBox.remove(firstBox.selectedIndex);
}

//moving item from second selectbox to first selectbox...
remove.addEventListener( "click", addToFirst);

function addToFirst(){
  //getting value of the selected option item	
  var secondBox = document.getElementById('second_box');
  var selectOption = secondBox.options[secondBox.selectedIndex];
  //adding that selected item to first select box.. 
  var firstBox = document.getElementById('first_box');
  var newOption = document.createElement("option");
  newOption.appendChild(document.createTextNode(selectOption.value));
  firstBox.appendChild(newOption);
  //removing from second checkbox..
  secondBox.remove(secondBox.selectedIndex);
}