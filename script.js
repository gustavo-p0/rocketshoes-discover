const videoWrapper = document.querySelector(".video-wrapper");
const video = document.querySelector("video");
const options = document.querySelectorAll(".option");
const mainImage = document.getElementById("main-image");

videoWrapper.addEventListener("click", (e) => {
  e.stopPropagation();
  videoWrapper.classList.toggle("playing");
  if (video.currentTime > 0 && !videoWrapper.classList.contains("playing")) {
    video.pause();
  } else {
    video.play();
  }
});

const images = new Map();

images.set(1, "./assets/img/tenis-1-galeria.png");
images.set(2, "./assets/img/tenis-2-galeria.png");
images.set(3, "./assets/img/tenis-3-galeria.png");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const key = parseInt(option.getAttribute("key"));
    options.forEach((op) => op.classList.remove("selected"));
    option.classList.add("selected");
    mainImage.setAttribute("src", images.get(+key));
  });
});
