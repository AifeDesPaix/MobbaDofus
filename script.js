// Fullscreen   
$(function() {

  $(".fullscreen-supported").toggle($(document).fullScreen() != null);
  $(".fullscreen-not-supported").toggle($(document).fullScreen() == null);
  
  $(document).bind("fullscreenchange", function(e) {
     console.log("Full screen changed.");
     $("#status").text($(document).fullScreen() ? 
         "Full screen enabled" : "Full screen disabled");
  });
  
  $(document).bind("fullscreenerror", function(e) {
     console.log("Full screen error.");
  });

});
