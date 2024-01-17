$(document).ready(function() {
  // Show popup when the button is clicked
  $("#showPopupBtn").click(function() {
    $("#popup").fadeIn(500); // 500 milliseconds (1 second) fade-in animation
  });

  // Close popup when the close button is clicked
  $("#closePopupBtn").click(function() {
    $("#popup").fadeOut(500); // 500 milliseconds (1 second) fade-out animation
  });

  // Close popup if the background overlay is clicked
  $(document).mouseup(function(e) {
    var popup = $("#popup");
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
      popup.fadeOut(500); // 500 milliseconds (1 second) fade-out animation
    }
  });
});
