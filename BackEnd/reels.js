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

/*Reels 1 Prev-Next*/

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

/*Reels 2 Prev-Next*/
const prevButton2 = document.getElementById('prev2');
const nextButton2 = document.getElementById('next2');
let currentIndex2 = 4;

prevButton2.addEventListener('click', () => {
  currentIndex2--;
  if (currentIndex2 < 4) {
    currentIndex2 = 4;
  }
  reels[currentIndex2].scrollIntoView({behavior: "smooth"});
});

nextButton2.addEventListener('click', () => {
  currentIndex2++;
  if (currentIndex2 >= reels.length) {
    currentIndex2 = reels.length - 1;
  }
  reels[currentIndex2].scrollIntoView({behavior: "smooth"});
});

/*Reels 3 Prev-Next*/
const prevButton3 = document.getElementById('prev3');
const nextButton3 = document.getElementById('next3');
let currentIndex3 = 8;

prevButton3.addEventListener('click', () => {
  currentIndex3--;
  if (currentIndex3 < 8) {
    currentIndex3 = 8;
  }
  reels[currentIndex3].scrollIntoView({behavior: "smooth"});
});

nextButton3.addEventListener('click', () => {
  currentIndex3++;
  if (currentIndex3 >= reels.length) {
    currentIndex3 = reels.length - 1;
  }
  reels[currentIndex3].scrollIntoView({behavior: "smooth"});
});

/*Reels 4 Prev-Next*/
const prevButton4 = document.getElementById('prev4');
const nextButton4 = document.getElementById('next4');
let currentIndex4 = 12;

prevButton4.addEventListener('click', () => {
  currentIndex4--;
  if (currentIndex4 < 12) {
    currentIndex4 = 12;
  }
  reels[currentIndex4].scrollIntoView({behavior: "smooth"});
});

nextButton4.addEventListener('click', () => {
  currentIndex4++;
  if (currentIndex4 >= reels.length) {
    currentIndex4 = reels.length - 1;
  }
  reels[currentIndex4].scrollIntoView({behavior: "smooth"});
});
