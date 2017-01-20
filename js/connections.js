
var base_url = "http://localhost:3000/";

function callServer(path, table, select) {

  var url = base_url + path;

  $.getJSON(url, function(data) {
    //console.log(data);

    postResults(data, table, select);
  });
}

function createEntity(path, data) {
  var url = base_url + path;   
    
  //console.log("Posting to " + url);
  //console.log(data);
  $.post(
    url, 
    data
  ).done( function(results ) {
    // console.log(results);
    var $table = $("#project_list");
    appendResult(results, $table);
    // $( "#results" ).html( results );
  }); 
}

function deleteEntity(path, id) {
  var url = base_url + path + "/" + id;   

  jQuery.ajax({
    //type: 'DELETE',
    method: "delete",
    url: url
    //data: {"action": "delete"}
  }).done( function(results ) {
    console.log(results);
    var $table = $("#project_list");
    console.log("TODO action after remove result");
    // $( "#results" ).html( results );
  }); 
}

