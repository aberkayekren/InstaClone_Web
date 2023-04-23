var button = document.getElementById("navbarBtn");
var openButton = document.getElementById("openNavbar");
var closeButton = document.getElementById("closeNavbar");

button.addEventListener("click", function() {
  var navbar = document.getElementById("navbar");
  if (navbar.classList.contains("clicked")) {
    navbar.classList.remove("clicked");
    closeButton.style.display = "none";
    openButton.style.display = "inline-block";
  } else {
    navbar.classList.add("clicked");
    closeButton.style.display = "inline-block";
    openButton.style.display = "none";
  }
});