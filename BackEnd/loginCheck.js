function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "1234") {
    window.location.href = "/html/index.html";
  } else {
    errorMessage.style.visibility = "visible";
    errorMessage.style.opacity = "1";
    errorMessage.innerHTML = "Kullanıcı adı veya şifre yanlış.";
  }
}