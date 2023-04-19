/*Loading Page*/ 
window.scrollTo(0, 0);
window.addEventListener('load', fg_load)

function fg_load() {
  setTimeout(() => {  
    document.getElementById('preloader').style.top = "-1000px";  
    document.getElementById('preloader').style.opacity = "0";
    document.getElementById('preloader').style.zIndex = "-100";
    document.getElementById('html').style.overflowY = "auto"}, 300);
}

/*Slide Show*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*Ana Sayfada Üstüne Gelinen Videoyu Oynatma*/
function playVideo(x) {
  x.currentTime = 0;
  x.play();
  setTimeout(function() {
    x.pause();
  }, 7000);
}

function pauseVideo(x) {
  x.pause();
}

//Gönderme efekti
function clearComplaint() {
  document.getElementById("complaint").value = "";
  alert("Şikayetinizi bildirip bize geri dönüş yaptığını için teşekkürler.");
}

//Sign Out
function confirmRedirect() {
  if (confirm("Emin misiniz?")) {
    window.location.href = "/html/loginPage.html";
  }
}

//Dosya Yükleme
const dosyaInput = document.getElementById('dosya');
  const yuklenenFotograf = document.getElementById('yuklenen-fotograf');

  dosyaInput.addEventListener('change', () => {
    const dosya = dosyaInput.files[0];
    yuklenenFotograf.style.display = "block";
    if (dosya) {
      yuklenenFotograf.src = URL.createObjectURL(dosya);
    }
  });