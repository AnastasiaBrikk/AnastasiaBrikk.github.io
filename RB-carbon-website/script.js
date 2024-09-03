"use strict";

// Header animation
const header = document.querySelector("#header-index");
window.addEventListener("load", () => {
  header.classList.add("scale-in-ver-top");
});


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



// FormData

document.addEventListener("DOMContentLoaded", () => {
  const ajaxSend = async (formData) => {
      const response = await fetch("mail.php", {
          method: "POST",
          body: formData
      });
      if (!response.ok) {
          throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
      }
      return await response.text();
  };

  if (document.querySelector("form")) {
      const forms = document.querySelectorAll("form");
      forms.forEach(form => {
          form.addEventListener("submit", function (e) {
              e.preventDefault();
              const formData = new FormData(this);

              ajaxSend(formData)
                  .then((response) => {
                      console.log(response);
                      form.reset(); // очищаем поля формы
                  })
                  .catch((err) => console.error(err))
          });
      });
  }
});