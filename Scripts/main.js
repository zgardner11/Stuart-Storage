// Hamburger menu for mobile navigation

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.navlinks-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Toggle color of nav button on click

    burger.classList.toggle('nav-invert');
    // burger.classList.remove('nav-invert');
})

let viewportWidth = window.innerWidth;
const logo = document.getElementById('logo');

function logoInvert () {
    if (viewportWidth <= 1024){
        logo.setAttribute('src', 'Media/logowhite.PNG')
    } 
}

logoInvert();

// Drop down items

function toggleClass( element ) {
    let data = 'dataHeader hidden';

    if ( element.className == data){
        element.className = data.replace('hidden', 'active');
    } else {
        element.className = data;
    }
}