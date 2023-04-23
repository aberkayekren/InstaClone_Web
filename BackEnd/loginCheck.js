function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "1234") {
    window.location.href = "/html/warningModal.html";
  }
  else if (username != "admin" && password === "1234") {
    errorMessage.style.visibility = "visible";
    errorMessage.style.opacity = "1";
    errorMessage.innerHTML = "Kullanıcı adı yanlış.";
  }
  else if (username == "admin" && password != "1234") {
    errorMessage.style.visibility = "visible";
    errorMessage.style.opacity = "1";
    errorMessage.innerHTML = "Şifre yanlış.";
  }
  else {
    errorMessage.style.visibility = "visible";
    errorMessage.style.opacity = "1";
    errorMessage.innerHTML = "Kullanıcı adı ve şifre yanlış.";
  }
}