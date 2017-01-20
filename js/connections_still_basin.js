
var base_url = "https://still-basin.herokuapp.com/api/";
var version = "v1/";


function callStillBasin(path, table) {

  var url = base_url + version + path;

  $.getJSON(url, function(data) {
    //console.log(data);

    postResults(data, table);
  });
}
