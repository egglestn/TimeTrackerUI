/* function setupTables() {

   var user_list = $("#users");
   setupTable(user_list);    
}*/

function setupTable(tableContainer) {

  var table = document.createElement('table');
  var headers = document.createElement('tr');
  var th1 = document.createElement('th');
  th1.innerHTML = "Id";
  var th2 = document.createElement('th');
  th2.innerHTML = "Name";
    
  tableContainer.append(table);
  table.appendChild(headers);
  headers.appendChild(th1);
  headers.appendChild(th2);

  return table;    
}

function postResults(data, table) {
    
   //console.log(data);    
   var proj_list = $("#project_list");
    
   $.each(data, function(key, value) {
     appendResult(value, table);
   });    
}

function appendResult(value, table) {
  //console.log(value);    
  //console.log(value.id + ": " + value.name);
  var row = document.createElement('tr');
  var td1 = document.createElement('td'); 
  td1.innerHTML = value.id;
  td1.id = "id";
    
  var td2 = document.createElement('td'); 
  td2.innerHTML = value.name;  
    
  // Delete note working    
  //var td3 = document.createElement('td'); 
  //var button = document.createElement('button');
  //button.className = "delete";
  //var icon = document.createElement("i");
  //icon.className = 'fa fa-trash';
  //button.append(icon);
  //td3.append(button);    
    
  table.append(row);
  row.appendChild(td1);    
  row.appendChild(td2);      
  // row.appendChild(td3);      
}


