let navbarTextItems = document.getElementsByClassName('navbar-mobile-text-item');
let mobileNavbar = document.querySelector('.navbar-mobile');
let menuIcon = document.querySelector('.navbar-mobile-icon.mobile');
let cancelIcon = document.querySelector('.navbar-mobile-cancel-icon-container');

cancelIcon.addEventListener('click', () => {
    mobileNavbar.style.display = "none";
})

menuIcon.addEventListener('click', () => {
    mobileNavbar.style.display = "grid";
})



for (var i=0; i<navbarTextItems.length ; i++) {
    navbarTextItems[i].addEventListener('click', () => {
        mobileNavbar.style.display = "none";
    })
}