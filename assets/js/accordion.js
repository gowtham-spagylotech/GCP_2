document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      var panel = this.nextElementSibling;

      // Close all panels
      for (var k = 0; k < acc.length; k++) {
        var otherPanel = acc[k].nextElementSibling;

        if (otherPanel && otherPanel !== panel) {
          otherPanel.style.maxHeight = null;

          // Reset background image and color when collapsing
          var otherBgImgAccordion = otherPanel.closest('.bg-img-accordion');
          otherBgImgAccordion.style.background = "none";
          otherBgImgAccordion.style.backgroundColor = "#fff";

          // Reset text color to #000 when collapsing
          var otherTitleSpace = acc[k].querySelector('.accordion-title-space');
          otherTitleSpace.style.color = "#000";
        }
      }

      // Toggle the "active" class on the clicked element
      this.classList.toggle("active");

      // Remove the "active" class from all other accordion elements
      for (var j = 0; j < acc.length; j++) {
        if (acc[j] !== this) {
          acc[j].classList.remove("active");
        }
      }

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;

        // Reset background image and color when collapsing
        var bgImgAccordion = panel.closest('.bg-img-accordion');
        bgImgAccordion.style.background = "none";
        bgImgAccordion.style.backgroundColor = "#fff";

        // Reset text color to #000 when collapsing
        var titleSpace = this.querySelector('.accordion-title-space');
        titleSpace.style.color = "#000";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";

        // Set background image for the clicked panel with height 581px
        var bgImgAccordion = panel.closest('.bg-img-accordion');
        var imagePath = "assets/img/Accordion-Bg.jpg";
        bgImgAccordion.style.background = "url(" + imagePath + ") no-repeat";
        bgImgAccordion.style.backgroundSize = "cover"; // Add this line
        bgImgAccordion.style.backgroundColor = "transparent";

        // Set text color to #fff when expanding
        var titleSpace = this.querySelector('.accordion-title-space');
        titleSpace.style.color = "#fff";
      }
    });
  }
});
