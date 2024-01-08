$(document).ready(function () {
  $(".accordion").on("click", function () {
    $('.accordion-outerline-img').addClass('hide');
    var panel = $(this).next(".panel");
    var plusIcon = $(this).find(".plus-icon");
    var minusIcon = $(this).find(".minus-icon");
    var accordionBg = $(this).closest('.bgImgAccordion');
    var outerlineImg = $('img.accordion-outerline-img');
    var accordionTitleSpace = $(this).find(".accordionTitleSpace");
    // Add a class to the clicked accordion
    $(this).toggleClass("activeAccordion");

    // Remove the class from all other accordions to make them inactive
    $(".accordion").not(this).removeClass("activeAccordion");

    // Check if the panel is not open
    if (panel.css("max-height") === "0px") {
      // Panel is closed, open it
      $(".panel").css("max-height", "0px");
      $(".plus-icon").show();
      $(".minus-icon").hide();
      $(".bgImgAccordion").removeClass("activeBg"); // Remove activeBg from all elements
      $("img.accordion-outerline-img").show(); // Show all outerline images

      panel.css("max-height", panel[0].scrollHeight + "px");
      plusIcon.hide();
      minusIcon.show();

      // Add the activeBg class to the background element of the clicked accordion
      accordionBg.addClass("activeBg");
      // Hide the outerline image for the active accordion
      outerlineImg.hide();

      // Add a class to change the color of accordionTitleSpace to #fff
      $(".accordionTitleSpace").removeClass("activeTitleSpace");
      accordionTitleSpace.addClass("activeTitleSpace");
      // console.log("close");

    } else {
      // Panel is open, close it
      panel.css("max-height", "0px");
      plusIcon.show();
      minusIcon.hide();
      // console.log("open");

      // Remove the activeBg class from the background element of the clicked accordion
      accordionBg.removeClass("activeBg");
      // Show the outerline image for the inactive accordion
      outerlineImg.show();

      // Remove the class to change the color of accordionTitleSpace to #06071B
      accordionTitleSpace.removeClass("activeTitleSpace");
    }
  });
});
