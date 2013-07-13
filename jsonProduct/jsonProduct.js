var jsonObject = [
  {"name":"01","url":"images/1.jpg","color":"Yellow","brand":"BRAND A","sold_out":"1"},
	{"name":"02","url":"images/2.jpg","color":"Red","brand":"BRAND B","sold_out":"0"},
	{"name":"03","url":"images/3.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},
	{"name":"04","url":"images/4.jpg","color":"Red","brand":"BRAND A","sold_out":"1"},
	{"name":"05","url":"images/5.jpg","color":"Blue","brand":"BRAND B","sold_out":"0"},
	{"name":"06","url":"images/6.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},
	{"name":"07","url":"images/7.jpg","color":"Red","brand":"BRAND C","sold_out":"1"},
	{"name":"08","url":"images/8.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},
	{"name":"09","url":"images/9.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"},
	{"name":"10","url":"images/10.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},
	{"name":"11","url":"images/11.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},
	{"name":"12","url":"images/12.jpg","color":"Yellow","brand":"BRAND D","sold_out":"0"},
	{"name":"13","url":"images/13.jpg","color":"Blue","brand":"BRAND A","sold_out":"0"},
	{"name":"14","url":"images/14.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},
	{"name":"15","url":"images/15.jpg","color":"Green","brand":"BRAND B","sold_out":"0"},
	{"name":"16","url":"images/16.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},
	{"name":"17","url":"images/17.jpg","color":"Green","brand":"BRAND A","sold_out":"1"},
	{"name":"18","url":"images/18.jpg","color":"Blue","brand":"BRAND D","sold_out":"1"},
	{"name":"19","url":"images/19.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},
	{"name":"20","url":"images/20.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"}
];

window.onload = displayBlocks();

var checkboxInput = document.getElementById('dropDown');
checkboxInput.addEventListener("click", call);
// event handler to be fired on selecting an input from select box..
function call(){
  var input = checkboxInput.options[checkboxInput.selectedIndex].value;
  sortJson(input);
}
//function to display the blocks...
function displayBlocks(){
  for(var i = 0; i < jsonObject.length; i++ ){
    var outerDiv = document.getElementById('container');
    var innerDiv = document.createElement("div");
    innerDiv.id = "innerDiv" + (i+1);
    var blockImg = document.createElement("img");
    blockImg.src = jsonObject[i].url;
    blockImg.height = "98";
    blockImg.width = "98";
    innerDiv.appendChild(blockImg);
    outerDiv.appendChild(innerDiv);
  }
}
//function to remove the blocks.....
function removeBlocks(){
  for(var i = 0; i< jsonObject.length; i++){
    var outerDiv = document.getElementById('container');
    var divRemove = document.getElementById("innerDiv" + (i+1));
    outerDiv.removeChild(divRemove);
  }
}
//function to sort the json objects ie blocks......
function sortJson(key){
  jsonObject.sort(function(a, b){
    var value1 = a[key], value2 = b[key];
    if(value1 < value2){
      return -1;
    } 
    else if(value1 > value2){
      return 1;
    }
    else{
      return 0;
    }
  });
  removeBlocks();
  displayBlocks();
}