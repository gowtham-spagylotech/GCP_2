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

//onClick hamburger dispaly navigation
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function () {
        // Toggle the crossed class on click
        hamburger.classList.toggle('crossed');
        
        // Toggle the display of the navbar
        navbar.classList.toggle('showNav');
    });
});

//onClick dropdown icon display dropdown navigation
function toggleDropdown() {
    var dropdownMenu = document.querySelector('#mobDataResults .mobDropdownmenu');
    dropdownMenu.classList.toggle('show');
}
