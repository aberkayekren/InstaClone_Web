var html = document.getElementById("html");
var main = document.getElementById("main");

/*First Modal*/
var modal1 = document.getElementById("postModal1");
var btn1 = document.getElementById("openModal1");
var span1 = document.getElementById("modalKpt1");

btn1.onclick = function () {
  modal1.style.visibility = "visible";
  modal1.style.opacity = "1";
  html.style.overflowY = "hidden";

}

span1.onclick = function () {
  modal1.style.visibility = "hidden";
  modal1.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Second Modal*/
var modal2 = document.getElementById("postModal2");
var btn2 = document.getElementById("openModal2");
var span2 = document.getElementById("modalKpt2");

btn2.onclick = function () {
  modal2.style.visibility = "visible";
  modal2.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span2.onclick = function () {
  modal2.style.visibility = "hidden";
  modal2.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Three Modal*/
var modal3 = document.getElementById("postModal3");
var btn3 = document.getElementById("openModal3");
var span3 = document.getElementById("modalKpt3");

btn3.onclick = function () {
  modal3.style.visibility = "visible";
  modal3.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span3.onclick = function () {
  modal3.style.visibility = "hidden";
  modal3.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Four Modal*/
var modal4 = document.getElementById("postModal4");
var btn4 = document.getElementById("openModal4");
var span4 = document.getElementById("modalKpt4");

btn4.onclick = function () {
  modal4.style.visibility = "visible";
  modal4.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span4.onclick = function () {
  modal4.style.visibility = "hidden";
  modal4.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Five Modal*/
var modal5 = document.getElementById("postModal5");
var btn5 = document.getElementById("openModal5");
var span5 = document.getElementById("modalKpt5");

btn5.onclick = function () {
  modal5.style.visibility = "visible";
  modal5.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span5.onclick = function () {
  modal5.style.visibility = "hidden";
  modal5.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Six Modal*/
var modal6 = document.getElementById("postModal6");
var btn6 = document.getElementById("openModal6");
var span6 = document.getElementById("modalKpt6");

btn6.onclick = function () {
  modal6.style.visibility = "visible";
  modal6.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span6.onclick = function () {
  modal6.style.visibility = "hidden";
  modal6.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Seven Modal*/
var modal7 = document.getElementById("postModal7");
var btn7 = document.getElementById("openModal7");
var span7 = document.getElementById("modalKpt7");

btn7.onclick = function () {
  modal7.style.visibility = "visible";
  modal7.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span7.onclick = function () {
  modal7.style.visibility = "hidden";
  modal7.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Eighten Modal*/
var modal8 = document.getElementById("postModal8");
var btn8 = document.getElementById("openModal8");
var span8 = document.getElementById("modalKpt8");

btn8.onclick = function () {
  modal8.style.visibility = "visible";
  modal8.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span8.onclick = function () {
  modal8.style.visibility = "hidden";
  modal8.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Nine Modal*/
var modal9 = document.getElementById("postModal9");
var btn9 = document.getElementById("openModal9");
var span9 = document.getElementById("modalKpt9");

btn9.onclick = function () {
  modal9.style.visibility = "visible";
  modal9.style.opacity = "1";
  html.style.overflowY = "hidden";
}

span9.onclick = function () {
  modal9.style.visibility = "hidden";
  modal9.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Report Modal*/
var reportModal = document.getElementById("reportModal");
var reportBtn = document.getElementById("openReportModal");
var reportClose = document.getElementById("reportModalKapat");

reportBtn.onclick = function () {
  reportModal.style.visibility = "visible";
  reportModal.style.opacity = "1";
  html.style.overflowY = "hidden";
}

reportClose.onclick = function () {
  reportModal.style.visibility = "hidden";
  reportModal.style.opacity = "0";
  html.style.overflowY = "auto";
}
/*Account Modal*/
var acoountModal = document.getElementById("accountModal");
var acoountBtn = document.getElementById("openAccountModal");
var acoountClose = document.getElementById("accountModalKapat");

acoountBtn.onclick = function () {
  acoountModal.style.visibility = "visible";
  acoountModal.style.opacity = "1";
  html.style.overflowY = "hidden";
}

acoountClose.onclick = function () {
  acoountModal.style.visibility = "hidden";
  acoountModal.style.opacity = "0";
  html.style.overflowY = "auto";
}
/*Publish Modal*/
var publishModal = document.getElementById("publishModal");
var publishButton = document.getElementById("openPublishModal");
var publishClose = document.getElementById("publishModalKapat");

publishButton.onclick = function () {
  publishModal.style.visibility = "visible";
  publishModal.style.opacity = "1";
  html.style.overflowY = "hidden";
}

publishClose.onclick = function () {
  publishModal.style.visibility = "hidden";
  publishModal.style.opacity = "0";
  html.style.overflowY = "auto";
}

/*Reels Modal - 1*/
var reelsModal1 = document.getElementById("reelsModal1");
var reelsModalContent1 = document.getElementById("reelsModalContent1");
var reelsBtn1 = document.getElementById("openReelsModal1");
var reelsSpan1 = document.getElementById("reelsModalkAPAT1");

reelsBtn1.onclick = function () {
  reelsModal1.style.visibility = "visible";
  reelsModal1.style.opacity = "1";
  reelsModalContent1.style.display = "block";
  main.style.filter = "blur(5px)";
  html.style.overflowY = "hidden";
}

reelsSpan1.onclick = function () {
  reelsModal1.style.visibility = "hidden";
  reelsModal1.style.opacity = "0";
  reelsModalContent1.style.display = "none";
  html.style.overflowY = "auto";
  main.style.filter = "blur(0px)";
}

/*Reels Modal - 2*/
var reelsModal2 = document.getElementById("reelsModal2");
var reelsModalContent2 = document.getElementById("reelsModalContent2");
var reelsBtn2 = document.getElementById("openReelsModal2");
var reelsSpan2 = document.getElementById("reelsModalkAPAT2");

reelsBtn2.onclick = function () {
  reelsModal2.style.visibility = "visible";
  reelsModal2.style.opacity = "1";
  reelsModalContent2.style.display = "block";
  main.style.filter = "blur(5px)";
  html.style.overflowY = "hidden";
}

reelsSpan2.onclick = function () {
  reelsModal2.style.visibility = "hidden";
  reelsModal2.style.opacity = "0";
  reelsModalContent2.style.display = "none";
  html.style.overflowY = "auto";
  main.style.filter = "blur(0px)";
}

/*Reels Modal - 3*/
var reelsModal3 = document.getElementById("reelsModal3");
var reelsModalContent3 = document.getElementById("reelsModalContent3");
var reelsBtn3 = document.getElementById("openReelsModal3");
var reelsSpan3 = document.getElementById("reelsModalkAPAT3");

reelsBtn3.onclick = function () {
  reelsModal3.style.visibility = "visible";
  reelsModal3.style.opacity = "1";
  reelsModalContent3.style.display = "block";
  main.style.filter = "blur(5px)";
  html.style.overflowY = "hidden";
}

reelsSpan3.onclick = function () {
  reelsModal3.style.visibility = "hidden";
  reelsModal3.style.opacity = "0";
  reelsModalContent3.style.display = "none";
  html.style.overflowY = "auto";
  main.style.filter = "blur(0px)";
}

/*Reels Modal - 4*/
var reelsModal4 = document.getElementById("reelsModal4");
var reelsModalContent4 = document.getElementById("reelsModalContent4");
var reelsBtn4 = document.getElementById("openReelsModal4");
var reelsSpan4 = document.getElementById("reelsModalkAPAT4");

reelsBtn4.onclick = function () {
  reelsModal4.style.visibility = "visible";
  reelsModal4.style.opacity = "1";
  reelsModalContent4.style.display = "block";
  main.style.filter = "blur(5px)";
  html.style.overflowY = "hidden";
}

reelsSpan4.onclick = function () {
  reelsModal4.style.visibility = "hidden";
  reelsModal4.style.opacity = "0";
  reelsModalContent4.style.display = "none";
  html.style.overflowY = "auto";
  main.style.filter = "blur(0px)";
}

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.visibility = "hidden";
    modal1.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal2) {
    modal2.style.visibility = "hidden";
    modal2.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal3) {
    modal3.style.visibility = "hidden";
    modal3.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal4) {
    modal4.style.visibility = "hidden";
    modal4.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal5) {
    modal5.style.visibility = "hidden";
    modal5.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal6) {
    modal6.style.visibility = "hidden";
    modal6.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal7) {
    modal7.style.visibility = "hidden";
    modal7.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal8) {
    modal8.style.visibility = "hidden";
    modal8.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == modal9) {
    modal9.style.visibility = "hidden";
    modal9.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == reportModal) {
    reportModal.style.visibility = "hidden";
    reportModal.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == acoountModal) {
    acoountModal.style.visibility = "hidden";
    acoountModal.style.opacity = "0";
    html.style.overflowY = "auto";
  } else if (event.target == publishModal) {
    publishModal.style.visibility = "hidden";
    publishModal.style.opacity = "0";
    html.style.overflowY = "auto";
  } else {
    null;
  }
}