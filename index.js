let likesNumber = document.querySelector(".likes-number");
let likeBtn = document.querySelector(".like-btn");
let thankYou = document.querySelector(".thank-you");
let count = 99;

likesNumber.textContent = count;

likeBtn.addEventListener("click", function () {
  count++;
  likesNumber.textContent = count;
  likeBtn.className = "hidden";
  thankYou.classList.remove("hidden");
});
