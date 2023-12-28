document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion-aboutus");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var panelAboutus = this.nextElementSibling;
            var plusIcon = this.querySelector('.plus-icon');
            var minusIcon = this.querySelector('.minus-icon');

            // Close all panelAboutuss
            for (var k = 0; k < acc.length; k++) {
                var otherpanelAboutus = acc[k].nextElementSibling;

                if (otherpanelAboutus && otherpanelAboutus !== panelAboutus) {
                    otherpanelAboutus.style.maxHeight = null;

                    // Reset icons for non-active accordions
                    var otherPlusIcon = acc[k].querySelector('.plus-icon');
                    var otherMinusIcon = acc[k].querySelector('.minus-icon');
                    otherPlusIcon.style.display = 'inline-block';
                    otherMinusIcon.style.display = 'none';

                    // Reset background image and color when collapsing
                    var otherBgImgAccordion = otherpanelAboutus.closest('.bg-img-accordion');
                    otherBgImgAccordion.style.background = "none";
                    otherBgImgAccordion.style.backgroundColor = "#fff";

                    // Reset text color to #000 when collapsing
                    var otherTitleSpace = acc[k].querySelector('.accordion-aboutus-title-space');
                    otherTitleSpace.style.color = "#000";
                }
            }

            // Toggle the "active" class on the clicked element
            this.classList.toggle("active");

            // Toggle plus and minus icons
            if (plusIcon.style.display === 'none') {
                plusIcon.style.display = 'inline-block';
                minusIcon.style.display = 'none';
            } else {
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'inline-block';
            }

            // Remove the "active" class from all other accordion elements
            for (var j = 0; j < acc.length; j++) {
                if (acc[j] !== this) {
                    acc[j].classList.remove("active");
                }
            }

            if (panelAboutus.style.maxHeight) {
                panelAboutus.style.maxHeight = null;

                // Reset background image and color when collapsing
                var bgImgAccordion = panelAboutus.closest('.bg-img-accordion');
                bgImgAccordion.style.background = "none";
                bgImgAccordion.style.backgroundColor = "#fff";

                // Reset text color to #000 when collapsing
                var titleSpace = this.querySelector('.accordion-aboutus-title-space');
                titleSpace.style.color = "#000";
            } else {
                panelAboutus.style.maxHeight = panelAboutus.scrollHeight + "px";

                // Set background image for the clicked panelAboutus with height 581px
                var bgImgAccordion = panelAboutus.closest('.bg-img-accordion');
                var imagePath = "assets/img/Aboutus-accordion-Bg.jpg";
                bgImgAccordion.style.background = "url(" + imagePath + ") no-repeat";
                bgImgAccordion.style.backgroundSize = "cover"; // Add this line
                bgImgAccordion.style.backgroundColor = "transparent";

                // Set text color to #fff when expanding
                var titleSpace = this.querySelector('.accordion-aboutus-title-space');
                titleSpace.style.color = "#fff";
            }
        });
    }
});
