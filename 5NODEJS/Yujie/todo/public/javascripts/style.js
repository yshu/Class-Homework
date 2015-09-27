function IsEmpty(){
  var str = document.forms['frm'].content.value
  //return !str.replace(/^\s+/g, '').length;
  if(str == "" || str.replace(/^\s+/g, '')=="")
  {
    alert("empty");
    return false;
  }
    return true;
}

// function Complete(){
//   var count = $(this).index();
//   alert("Complete");
// }

$(".complete").on("click", function(){
  var icon = $(this).find("i");

  if(icon.attr("class") === "fa fa-check-square-o fa-lg") {
    var todotext = $(this).parent().parent().parent().find("span[class*=check-todo]");
    todotext.removeClass("check-todo");
    todotext.addClass("check-complete");
  
    icon.removeClass("fa fa-check-square-o fa-lg");
    icon.addClass("fa fa-ban fa-lg");
  }
  else if(icon.attr("class") === "fa fa-ban fa-lg"){
    var todotext = $(this).parent().parent().parent().find("span[class*=check-complete]");
    todotext.removeClass("check-complete");
    todotext.addClass("check-todo");
    
    icon.removeClass("fa fa-ban fa-lg");
    icon.addClass("fa fa-check-square-o fa-lg");
    
  }
});

