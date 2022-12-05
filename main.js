// setupCounter(document.querySelector('#counter'))
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
// const navToggleBtns = document.querySelectorAll(".mobile-nav-toggle");

const primaryNavHidden = document.querySelector(".primary-navigation-hidden");
const playBtn = document.querySelector(".play-btn");
const videoOne = document.querySelector(".video-one");
const videoWrapper = document.querySelector(".video-wrapper");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

playBtn?.addEventListener("click", function () {
  if (videoOne.paused) videoOne.play();
  else videoOne.pause();
});

//open modal
// const openModal = function () {
//   modal.classList.remove("hide");
//   overlay.classList.remove("hide");
// };

const showCloseModal = function () {
  modal.classList.toggle("hide");
  overlay.classList.toggle("hide");
};

//close modal
const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

navToggle.addEventListener("click", showCloseModal);
overlay.addEventListener("click", closeModal);

// navToggleBtns.forEach(function (btn) {
//   btn.addEventListener("click", showCloseModal);
// });

// .addEventListener("click", showCloseModal);
// overlay.addEventListener("click", closeModal);

// //add cookies msg
// const cookiesMsg = document.createElement("div");
// cookiesMsg.classList.add("cookies-msg");
// cookiesMsg.innerHTML =
//   "This website uses cookies for improved functionality <br> <button class= 'cookies-msg-btn'>Ok</button>";

// // cookiesMsg.append(primaryHeader);
// body.append(cookiesMsg);
// console.log(cookiesMsg);

// const cookies_msg_btn = document.querySelector(".cookies-msg-btn");
// cookies_msg_btn.addEventListener("click", function () {
//   cookiesMsg.classList.add("hide");
// });

//scroll up when u click on home (footer navigation)
const scroll_up = document.querySelector(".scroll-up");
scroll_up.addEventListener("click", function (e) {
  e.preventDefault();

  primaryHeader.scrollIntoView({ behavior: "smooth" });
});

//event delegation: flip active div
const flipDivContainer = document.querySelector(".flip-div-container");
const flipDivs = document.querySelectorAll(".flip-div");

flipDivContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".flip-div");
  console.log(e.target.closest(".flip-div"));

  if (!clicked) return;

  //remove flip class from container
  const parent = clicked.parentElement;
  console.log(parent);
  parent.classList.toggle("grid-area-flip");
  clicked.style.transform = "scale(1.01)";
});
