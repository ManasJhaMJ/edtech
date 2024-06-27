// Change navbar properties on scroll
var navbar = document.querySelector('nav')
window.onscroll = function () {
    if (window.scrollY > 200) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "90%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// typed.js
var typed = new Typed('#typed', {
    strings: ['', 'We dont sell Courses. <br>We provide <span class="highlight">Values</span>.'],
    typeSpeed: 50,
});
