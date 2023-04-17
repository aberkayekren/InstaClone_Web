const videoElements = document.querySelectorAll('.reelsVideo');

const observerOptions = {
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const video = entry.target;
      video.play();
      video.loop = true;
    } else {
      const video = entry.target;
      video.pause();
    }
  });
}, observerOptions);

videoElements.forEach((video) => {
  observer.observe(video);
});

const reels = document.querySelectorAll('.reelsVideo');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  reels[currentIndex].scrollIntoView({behavior: "smooth"});
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= reels.length) {
    currentIndex = reels.length - 1;
  }
  reels[currentIndex].scrollIntoView({behavior: "smooth"});
});

