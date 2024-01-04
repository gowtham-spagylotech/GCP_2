$(document).ready(function() {
  // Show popup when the button is clicked
  $("#showPopupBtn").click(function() {
    $("#popup").css("display", "block");
  });

  // Close popup when the close button is clicked
  $("#closePopupBtn").click(function() {
    $("#popup").css("display", "none");
  });

  // Close popup if the background overlay is clicked
  $(document).mouseup(function(e) {
    var popup = $("#popup");
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
      popup.css("display", "none");
    }
  });
});
