//Typing 
var typed = new Typed(".type", {
    strings: ["THE END", "CODER", "FRONTEND-DEV"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

//Sticky navigative bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}