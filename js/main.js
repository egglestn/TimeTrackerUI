$( document ).ready(function() {

  var proj_list = $("#projects");
  var proj_table = setupTable(proj_list);
  var $select = $("#project_select");

  callServer("projects", proj_table, $select);
   
  /*var user_list = $("#users");
  var user_table = setupTable(user_list);
  callServer("users", user_table);*/
    
  var entry_list = $("#entries");
  var entry_table = setupTable(entry_list);
  callServer("entries", entry_table);
    
  $("#project_button").click(function() {
    var $proj_name = $("#project_name");
       
    var project = {"project":{"name": $proj_name[0].value}};
    createEntity("projects", project);

  });
    
  $(document).on("click", ".delete", function(event){    
    console.log("Clicked delete " + event.target);
    var row = event.target.closest("tr");
    var id = row.firstChild.innerHTML;
    deleteEntity("projects", id);  
  });
  
  $("#entry_button").on("click", function(event){    
    console.log("Clicked entry " + event.target);
    
    
  });
    
});

