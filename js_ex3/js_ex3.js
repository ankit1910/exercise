
//function to add a new row only
function addrow()
{
  var table = document.getElementById("my_table");
  var pos = table.rows.length;
  var row=table.insertRow(pos);
  row.id = "row" + pos;
  makecol(row, pos, undefined, undefined)
}

//function to inset col into rows;
function makecol(row, pos, n_value, e_value)
{
  //append first cell of row i.e. name
  var cell_name=row.insertCell(0);
  cell_name.id = "cell_n" + pos;
  var element1 = document.createElement("input");
  element1.id = "name" + pos ;
  element1.type = "textbox";
  cell_name.appendChild(element1);
  
  //append second cell i.e. email
  var cell_email=row.insertCell(1);
  cell_email.id = "cell_e" + pos; 
  var element2 = document.createElement("input");
  element2.id = "email" + pos;
  element2.type = "textbox";  
  cell_email.appendChild(element2);

  
  //append third cell i.e. save button
  var cell_action = row.insertCell(2);
  cell_action.id = "cell_a" + pos;
  var element3 = document.createElement("button");
  element3.appendChild(document.createTextNode("save"));
  element3.id = "save" + pos ;
  cell_action.appendChild(element3);  
  element3.setAttribute("onClick","save_row('" + pos + "')");

  //insert value in text box on edit..
  if(n_value != undefined && e_value !=undefined)
  {
    element1.value = n_value;
    element2.value = e_value;
  }
}


// function to save the input in the table
function save_row(position)
{  
  //replacing text box with name value
  var parent_node = document.getElementById("cell_n" + position);
  var node = document.getElementById("name" + position);
  var n_value = node.value;
  parent_node.removeChild(node);  
  parent_node.appendChild(document.createTextNode(n_value));

  //replacing textbox with email value
  var parent_node1 = document.getElementById("cell_e" + position);
  var node1 = document.getElementById("email" + position);
  var e_value = node1.value;
  parent_node1.removeChild(node1);  
  parent_node1.appendChild(document.createTextNode(e_value));

  //replacing save button with links(edit /delete)
  var parent_node2 = document.getElementById("cell_a" + position);
  var node2 = document.getElementById("save" + position);
  parent_node2.removeChild(node2);  
  //making edit link
  var ele_edit = document.createElement("a");
  ele_edit.appendChild(document.createTextNode("edit"));
  ele_edit.href = "javascript:void(0)";
  parent_node2.appendChild(ele_edit);
  ele_edit.setAttribute("onClick","edit_row('" + position + "')");
  //making delete link
  parent_node2.appendChild(document.createTextNode("/"));
  var ele_del = document.createElement("a");
  ele_del.appendChild(document.createTextNode("delete"));
  ele_del.href = "javascript:void(0)";
  parent_node2.appendChild(ele_del);
  ele_del.setAttribute("onClick","delete_row('" + position + "')");

}

//funtion to delete row
function delete_row(position)
{
  document.getElementById('my_table').lastChild.removeChild(document.getElementById("row" + position));
}

//function to edit the selected row
function edit_row(position)
{
  var parent_node = document.getElementById("row" + position);
  
  //deleting the name cell from the selected row
  var node = document.getElementById("cell_n" + position);
  var n_value = node.innerHTML;
  parent_node.removeChild(node);

  //deleting the email cell from the selected row
  var node1 = document.getElementById("cell_e" + position);
  var e_value = node1.innerHTML;
  parent_node.removeChild(node1);

  //deleting the cell containing edit/ delete link from the selected row
  var node2 = document.getElementById("cell_a" + position);
  parent_node.removeChild(node2);
  
  //calling function to insert cells in row on edit click
  makecol(parent_node, position, n_value, e_value);
  
   
  
  
}