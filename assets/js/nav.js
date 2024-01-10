//Desktop dropdown navigation
document.addEventListener('DOMContentLoaded', function () {
    var dataResultsItem = document.getElementById('dataResults');

    if (dataResultsItem) {
        var dropdownMenu = dataResultsItem.querySelector('.dropdownmenu');

        dataResultsItem.addEventListener('mouseover', function () {
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
            }
        });

        dataResultsItem.addEventListener('mouseout', function () {
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
});


//mobile dropdown navigation
document.addEventListener('DOMContentLoaded', function () {
    var mobDataResultsItem = document.getElementById('mobDataResults');


    var dropdownMenu = mobDataResultsItem.querySelector('.mobDropdownmenu');
    var bannerDownArrow = mobDataResultsItem.querySelector('.bannerDownArrow');
    var bannerUpArrow = mobDataResultsItem.querySelector('.bannerUpArrow');

    bannerDownArrow.addEventListener('click', function () {
        if (bannerDownArrow) {
            dropdownMenu.classList.remove('hideData');
            dropdownMenu.classList.add('showData');
            bannerDownArrow.classList.remove('showData');
            bannerDownArrow.classList.add('hideData');
            bannerUpArrow.classList.remove('hideData');
            bannerUpArrow.classList.add('showData');
        }
    });

    bannerUpArrow.addEventListener('click', function () {
        if (bannerUpArrow) {
            dropdownMenu.classList.remove('showData');
            dropdownMenu.classList.add('hideData');
            bannerUpArrow.classList.add('hideData');
            bannerUpArrow.classList.remove('showData');
            bannerDownArrow.classList.add('showData');
            bannerDownArrow.classList.remove('hideData');
        }
    });


});

//onClick hamburger dispaly navigation
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const heroBanner = document.getElementById('heroBanner');
    const herotwoBanner = document.getElementById('herotwoBanner');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function () {


        // Toggle the crossed class on click
        hamburger.classList.toggle('crossed');
        // Toggle the display of the navbar
        navbar.classList.toggle('showNav');
        heroBanner.classList.remove('showData');
        heroBanner.classList.add('hideData');
        herotwoBanner.classList.remove('hideData');
        herotwoBanner.classList.add('showData');
    });


});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const heroBanner = document.getElementById('heroBanner');
    const herotwoBanner = document.getElementById('herotwoBanner');

    // Initially check if the 'crossed' class is present
    var crossed = hamburger.classList.contains('crossed');

    // Function to toggle banners based on the 'crossed' class
    function toggleBanners() {
        if (crossed) {
            heroBanner.classList.remove('showData');
            heroBanner.classList.add('hideData');
            herotwoBanner.classList.remove('hideData');
            herotwoBanner.classList.add('showData');
        } else {
            heroBanner.classList.remove('hideData');
            heroBanner.classList.add('showData');
            herotwoBanner.classList.remove('showData');
            herotwoBanner.classList.add('hideData');
        }
    }

    // Add click event listener to the hamburger element
    hamburger.addEventListener('click', function () {
        // Toggle the 'crossed' class on click
        crossed = !crossed;

        // Toggle the banners based on the updated 'crossed' value
        toggleBanners();
    });

    // Initially toggle banners based on the 'crossed' class
    toggleBanners();
});



//onClick dropdown icon display dropdown navigation
function toggleDropdown() {
    var dropdownMenu = document.querySelector('#mobDataResults .mobDropdownmenu');
    dropdownMenu.classList.toggle('show');
}
