var addCountry = document.getElementById('add');
var removeCountry = document.getElementById('remove');

//moving item from first selectbox to second selectbox...
addCountry.addEventListener( "click", function(){
  swapCountry('first_box', 'second_box');
});

//moving item from second selectbox to first selectbox...
removeCountry.addEventListener( "click", function(){
  swapCountry('second_box', 'first_box');
});
//swaping the country from one box to another
function swapCountry(box_from, box_to) {
  var boxFrom = document.getElementById(box_from);
  var boxTo = document.getElementById(box_to);
  while (boxFrom.selectedIndex != -1) {
    boxTo.appendChild(boxFrom.options[boxFrom.selectedIndex]);
  }
}

