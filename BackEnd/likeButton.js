const heartIcons = document.querySelectorAll(".like-button .heart-icon");
const likesAmountLabels = document.querySelectorAll(
  ".like-button .likes-amount"
);

let likesData = [{
    likesAmount: 7,
    isLiked: false
  },
  {
    likesAmount: 5,
    isLiked: false
  },
  {
    likesAmount: 3,
    isLiked: false
  },
  {
    likesAmount: 32,
    isLiked: false
  },
  {
    likesAmount: 31,
    isLiked: false
  },
  {
    likesAmount: 30,
    isLiked: false
  },
  {
    likesAmount: 29,
    isLiked: false
  },
  {
    likesAmount: 28,
    isLiked: false
  },
  {
    likesAmount: 27,
    isLiked: false
  },
  {
    likesAmount: 26,
    isLiked: false
  },
  {
    likesAmount: 25,
    isLiked: false
  },
  {
    likesAmount: 24,
    isLiked: false
  },
  {
    likesAmount: 321,
    isLiked: false
  }
];

heartIcons.forEach((heartIcon, index) => {
  likesAmountLabels[index].innerHTML = likesData[index].likesAmount;

  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("liked");
    if (heartIcon.classList.contains("liked")) {
      likesData[index].likesAmount++;
      likesData[index].isLiked = true;
    } else {
      likesData[index].likesAmount--;
      likesData[index].isLiked = false;
    }

    likesAmountLabels[index].innerHTML = likesData[index].likesAmount;

    // Update likes data in local storage
    localStorage.setItem("likesData", JSON.stringify(likesData));
  });
});

// Get likes data from local storage if exists
const storedLikesData = localStorage.getItem("likesData");
if (storedLikesData) {
  likesData = JSON.parse(storedLikesData);
  likesData.forEach((data, index) => {
    if (data.isLiked) {
      heartIcons[index].classList.add("liked");
    }
    likesAmountLabels[index].innerHTML = data.likesAmount;
  });
}

// Tüm beğenme butonlarını seçin ve bir diziye kaydedin
const likeButtons = document.querySelectorAll('.like-button');

// Her butona tıklandığında, diğer tüm butonları da beğenilmiş olarak işaretleyin
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Tüm butonların beğenilmiş olarak işaretlenmesini kaldırın
    likeButtons.forEach(otherButton => {
      otherButton.classList.remove('liked');
    });

    // Tıklanan butonu beğenilmiş olarak işaretleyin
    button.classList.add('liked');
  });
});