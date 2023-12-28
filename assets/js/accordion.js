document.addEventListener("DOMContentLoaded", function () {
  var acc = document.querySelectorAll(".accordion");


  acc.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      var panel = this.nextElementSibling;
      if (panel) {
        // Close all panels
        acc.forEach(function (otherAccordion) {
          var otherPanel = otherAccordion.nextElementSibling;

          if (otherPanel && otherPanel !== panel) {
            otherPanel.style.maxHeight = null;
            resetAccordionStyles(otherAccordion);
          }
        });

        // Toggle the "active" class on the clicked element
        this.classList.toggle("active");
        // panel.classList.toggle("activePanel")
        // var bgImgAccordion = accordion.closest('.bg-img-accordion');
        // setAccordionStyles(accordion);
        // bgImgAccordion.classList.toggle("activeBg")

        // Remove the "active" class from all other accordion elements
        acc.forEach(function (otherAccordion) {
          if (otherAccordion !== accordion) {
            otherAccordion.classList.remove("active");
          }
        });

        // Toggle panel visibility
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          resetAccordionStyles(accordion);
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          setAccordionStyles(accordion);
        }
      }
    });
  });
});

// Function to reset styles for an accordion
function resetAccordionStyles(accordion) {
  var bgImgAccordion = accordion.closest('.bg-img-accordion');
  bgImgAccordion.classList.remove("activeBg");

  var titleSpace = accordion.querySelector('.accordion-title-space');
  titleSpace.style.color = "#000";

  var plusIcon = accordion.querySelector('.plus-icon');
  var minusIcon = accordion.querySelector('.minus-icon');
  plusIcon.style.display = "block";
  minusIcon.style.display = "none";

  var outerlineimage = document.querySelector('.accordion-outerline-img');
  if (outerlineimage) {
    outerlineimage.style.display = "block";
  }

}

// Function to set styles for an accordion
function setAccordionStyles(accordion) {
  var bgImgAccordion = accordion.closest('.bg-img-accordion');
  bgImgAccordion.classList.add("activeBg");

  var titleSpace = accordion.querySelector('.accordion-title-space');
  titleSpace.style.color = "#fff";

  var plusIcon = accordion.querySelector('.plus-icon');
  var minusIcon = accordion.querySelector('.minus-icon');
  plusIcon.style.display = "none";
  minusIcon.style.display = "block";

  var outerlineimage = document.querySelector('.accordion-outerline-img');
  if (outerlineimage) {
    outerlineimage.style.display = "none";
  }

}
