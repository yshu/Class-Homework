var toggleFlag = true;

/* set stars' hover effect */
$(".star").hover(
  function() {
    var currentIndex = $(this).index();
    $(".star").each(function(i, li) {
      if(i <= currentIndex) {
        $(this).html('&#9733');
      }
      else {
        $(this).html('&#9734');
      }
    });
});

/* set blank when mouse move away without clicking */
$(".stars").hover(function() {}, function() {
  $(".star").html('&#9734');
});

/* click to select and click again to unclick */
$("li").on("click", function(){
  if(toggleFlag === true) {
    $("li").removeClass("star");
    toggleFlag = false;
    var count = $(this).index() + 1;
    $(".rating").text("Star ratings is: " + count);
  }
  else {
    $("li").addClass("star");
    $(".star").each(function(i, li) {
      $(this).html('&#9734');
    });
    toggleFlag = true;
    $(".rating").text("Star ratings is: 0");
  }    
});



