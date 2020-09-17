// prints "navbar start" in the browser's dev tools console
console.log("navbar start");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// prints "slides start" in the browser's dev tools console
console.log("slides start");

var slideIndex = 0;
showSlides(slideIndex);
carousel();

// Increments the slides by 1
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Changes the current slide to be the same value as the dot (n)
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Displays the current slide and the dots
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Increments slides by 1 every 5 seconds
function carousel() {
  plusSlides(1);
  setTimeout(carousel, 5000);
}
