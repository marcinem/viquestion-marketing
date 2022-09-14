const videoWrapper = document.getElementById("videoWrapper");
const videoFrame = document.getElementById("videoFrame");

const heroHeadings = document.getElementById("heroHeadings");
const controls = document.getElementById("controls");

const videoIntro = document.getElementById("videoIntro");
videoIntro.volume = 0.2;

const videoExplainer = document.getElementById("videoExplainer");

const btnPlayStep3 = document.getElementById("btnPlayStep3");
const noThanksBtn = document.getElementById("noThanks");

const playButton = document.getElementById("playButton");
const closeIcon = document.getElementById("closeIcon");

function openPlayer() {
  videoWrapper.classList.add("is-full-screen");
  videoFrame.classList.add("video-is-opened");
  heroHeadings.classList.add("is-blurred");

  setTimeout(() => {
    videoIntro.play();
  }, 1000);

  videoIntro.addEventListener("ended", () => {
    controls.classList.add("show-controls");
  });
}

function playExplainer() {
  controls.classList.remove("show-controls");
  videoExplainer.classList.add("videoExplainerIsPlayed");
  videoIntro.pause();
  videoExplainer.play();
}

function closePlayer() {
  videoWrapper.classList.remove("is-full-screen");
  videoFrame.classList.remove("video-is-opened");
  heroHeadings.classList.remove("is-blurred");
  controls.classList.remove("show-controls");
  videoExplainer.classList.remove("videoExplainerIsPlayed");

  setTimeout(() => {
    videoIntro.pause();
    videoExplainer.pause();
  }, 500);
}

playButton.addEventListener("click", openPlayer);
closeIcon.addEventListener("click", closePlayer);
noThanksBtn.addEventListener("click", closePlayer);
// videoFrame.addEventListener("click", openPlayer);

btnPlayStep3.addEventListener("click", playExplainer);
