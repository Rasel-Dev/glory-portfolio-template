window.addEventListener("scroll", function () {
  var nav = document.querySelector("#top_nav");
  var top = document.querySelector(".top");
  nav.classList.toggle("sticky", window.scrollY > 150);
  top.classList.toggle("show", window.scrollY > 800);
});
const links = document.querySelectorAll(".nav ul a");

links.forEach((link) => {
  link.addEventListener("click", smoothscroller);
});

function smoothscroller(e) {
  e.preventDefault();
  e.target.classList.add("active");
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
var video_btn = document.querySelector(".play");
var video_section = document.querySelector("#video_section");
var vid = document.querySelector("#vid");
var close = document.querySelector(".close");

video_btn.addEventListener("click", function () {
  video_section.style.display = "grid";
  vid.play();
});
close.addEventListener("click", function () {
  video_section.style.display = "none";
  vid.pause();
});
