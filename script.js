"use strict";

// const topTitle = document.querySelector("#top-index");
// window.addEventListener("load", () => {
//   topTitle.classList.add("tracking-in-expand");
// });

const header = document.querySelector("#header-index");
window.addEventListener("load", () => {
  header.classList.add("scale-in-ver-top");
});

// const mainBox = document.querySelector("main");
// window.addEventListener('load', () => {
//     mainBox.classList.add("scale-up-center");
// })

// burger-menu mobile
const hamb = document.getElementById("hamburger");
const closeIcon = document.querySelector(".closeMenu");
hamb.addEventListener("click", hambHandler);
closeIcon.addEventListener("click", closeMenu);
function hambHandler(e) {
  e.preventDefault();
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function closeMenu(e) {
  e.preventDefault();
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

//preloader

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};
