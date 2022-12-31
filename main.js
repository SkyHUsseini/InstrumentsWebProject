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


const allSections = document.querySelectorAll(".section");
const allText = document.querySelectorAll(".textReveal");

playBtn?.addEventListener("click", function () {
  if (videoOne.paused) videoOne.play();
  else videoOne.pause();
});


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


//add cookies msg
const cookiesMsg = document.createElement("div");
cookiesMsg.classList.add("cookies-msg");
cookiesMsg.innerHTML =
  "This website uses cookies for improved functionality <br> <button class= 'cookies-msg-btn'>Ok</button>";

// cookiesMsg.append(primaryHeader);
body.append(cookiesMsg);
console.log(cookiesMsg);

const cookies_msg_btn = document.querySelector(".cookies-msg-btn");
cookies_msg_btn.addEventListener("click", function () {
  cookiesMsg.classList.add("hide");
});

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

/REVEAL SECTIONS ON SCROLL

const revealSection = function (entries, observer) {
  const [entry] = entries;

  //remove the section--hidden from the target section
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  entry.target.classList.remove("text--hidden");

  observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0.15,
};
const revealObserver = new IntersectionObserver(revealSection, obsOptions);

allSections.forEach(function (section) {
  revealObserver.observe(section);
  section.classList.add("section--hidden");
});

// for textReveal
allText.forEach(function (text) {
  revealObserver.observe(text);
  text.classList.add("text--hidden");
});

//SLIDER COMPONENT
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

//default
slides.forEach(function (s, i) {
  s.style.transform = `translateX(${100 * i}%)`;
});

let currSlide = 0;
let maxSlide = slides.length;
console.log(maxSlide);

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};
const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
