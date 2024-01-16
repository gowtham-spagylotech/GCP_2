window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
});

// Hide nav on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navigation').outerHeight();
console.log("navbarHeight - ", navbarHeight)
$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If scrolled down and past the navbar, add class .nav-up.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('.navigation').removeClass('nav-up').addClass('nav-down');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('.navigation').removeClass('nav-down').addClass('nav-up');
    }
  }

  lastScrollTop = st;
}


//onClick hamburger dispaly navigation
$(document).ready(function () {
    const hamburger = $('#hamburger');
    const header = $('header');
    const navbar = $('#navbar');
    const navigation = $('.navigation');

    hamburger.click(function () {
        header.addClass('hamburgerOpened');
        navigation.toggleClass('navigationOpened');
        hamburger.toggleClass('crossed');
        $('#navbar').slideToggle(600, function () {
            if (header.hasClass('hamburgerOpened')) {
                setTimeout(function () {
                    header.removeClass('hamburgerOpened');
                }, 1);
            }
        });;
    });
});




//onClick dropdown icon display dropdown navigation
$(document).ready(function () {
    var dropdownMenu = $('#mobDataResults .dropdown-arrow');
    var dropdownContent = $('.mobDropdownmenu');

    dropdownMenu.click(function (event) {
        event.stopPropagation();
        dropdownMenu.toggleClass('upArrow');
        dropdownContent.slideToggle(600);
    });

    // Close the dropdown when clicking anywhere on the document
    $(document).on('click', function (event) {
        if (!dropdownMenu.is(event.target) && dropdownMenu.has(event.target).length === 0) {
            dropdownMenu.removeClass('upArrow');
            dropdownContent.slideUp(600);
        }
    });
});


