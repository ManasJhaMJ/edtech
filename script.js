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
    strings: ['', 'Good <span class="highlight">coaching</span> is good teaching &amp; nothing else.'],
    typeSpeed: 50,
});