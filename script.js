"use strict";

const topTitle = document.querySelector("#top-index");
window.addEventListener("load", () => {
  topTitle.classList.add("tracking-in-expand");
});

const header = document.querySelector("#header-index");
window.addEventListener("load", () => {
  header.classList.add("scale-in-ver-top");
});


const mainBox = document.querySelector("main");
window.addEventListener('load', () => {
    mainBox.classList.add("scale-up-center");
})
