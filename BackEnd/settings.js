function handleRadioButtons() {
  var radioButtons = document.getElementsByName("radioButton");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      null;
    } else {
      radioButtons[i].removeAttribute("disabled");
    }
  }
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      continue;
    } else {
      radioButtons[i].setAttribute("disabled", "disabled");
    }
  }
}

document.addEventListener("click", function (e) {
  var radioButtons = document.getElementsByName("radioButton");
  var radioGroup = document.querySelector('input[name="radioButton"]:checked');
  if (radioGroup !== null && !radioGroup.contains(e.target)) {
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].removeAttribute("disabled");
      radioButtons[i].parentNode.style.backgroundColor = "";
    }
  }
});