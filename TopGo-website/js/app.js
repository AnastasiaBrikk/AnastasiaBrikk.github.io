// /*Проверка поддержки webp, добавление класса webp или no-webp для HTML*/

// function isWebp() {
//   // Проверка поддержки webp
//   function testWebP(callback) {
//     let webP = new Image();
//     webP.onload = webP.onerror = function () {
//       callback(webP.height == 2);
//     };
//     webP.src =
//       "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//   }

//   // Добавление класса _webp или _no-webp для HTML
//   testWebP(function (support) {
//     let className = support === true ? 'webp' : 'no-webp';
//     document.documentElement.classList.add(className);
//   });
// }

// isWebp();

//slider news
$(document).ready(function () {
  $(".news-slider").slick({
    infinite: true,
    speed: 500,
    mobileFirst: true,
    easing: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    touchThreshold: 10,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

//slider team mobile
$(document).ready(function () {
  $(".team__slider").slick({
    infinite: true,
    speed: 300,
    easing: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//slider partners
$(document).ready(function () {
  $(".partner-partners__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    adaptiveHeight: true,
    mobileFirst: true,
    speed: 2000,
    arrows: false,
    dots: false,
    draggable: false,
    infinite: true,
    useTransform: true,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
          draggable: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
          draggable: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
          draggable: false,
        },
      },
    ],
  });
});

// Кнопка "наверх"
const btnUp = document.querySelector(".btn-up");

// при прокрутке содержимого страницы
window.addEventListener("scroll", () => {
  // определяем величину прокрутки
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
  scrollY > 2000
    ? btnUp.classList.remove("btn-up_hide")
    : btnUp.classList.add("btn-up_hide");
});

// при нажатии на кнопку .btn-up
btnUp.onclick = () => {
  // переместим в начало страницы
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//заказ звонка форма
let button = document.querySelector(".top__tel_icon");
let close = document.querySelector(".top__tel_form-close");
let form = document.querySelector(".header__form");

// Устанавливаем начальное состояние блока формы
form.style.display = "none";
close.style.display = "none";

// Добавляем обработчик события на кнопку
button.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "block";
    close.style.display = "block";
    button.style.display = "none";
    close.style.opacity = 0;
    form.style.opacity = 0;
    // Плавное появление блока
    fadeIn(form);
    fadeIn(close);
  } else {
    fadeOut(form);
    fadeOut(close);
  }
});

close.addEventListener("click", function () {
  button.style.display = "block";
  close.style.display = "none";
  fadeOut(form);
});

// Функция для плавного появления блока
function fadeIn(element) {
  let opacity = 0;
  const timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 40);
}

// Функция для плавного исчезновения блока
function fadeOut(element) {
  let opacity = 1;
  const timer = setInterval(function () {
    if (opacity <= 0) {
      element.style.display = "none";
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity -= 0.1;
  }, 30);
}

//burger-menu

let burgerBtn = document.querySelector(".header__burger");

if (window.innerWidth < 768 && window.innerHeight < 1000) {
  burgerBtn.style.display = "block";
}

let burgerClose = document.querySelector(".header__burger-close");

burgerClose.style.display = "none";

let burgerMenu = document.querySelector(".header__burger-menu");

burgerMenu.style.display = "none";

burgerBtn.addEventListener("click", function () {
  if (burgerMenu.style.display === "none") {
    burgerMenu.style.opacity = 0;
    burgerClose.style.opacity = 0;
    burgerClose.style.display = "block";
    burgerBtn.style.display = "none";
    burgerMenu.style.display = "flex";
    fadeIn(burgerClose);
    fadeIn(burgerMenu);
  } else {
    fadeOut(burgerClose);
    fadeOut(burgerMenu);
  }
});

burgerClose.addEventListener("click", function () {
  burgerClose.style.display = "none";
  burgerBtn.style.opacity = 0;
  burgerBtn.style.display = "block";
  fadeIn(burgerBtn);
  fadeOut(burgerMenu);
});

//скролл к блокам по ссылкам в меню

$("#header-news").click(function () {
  // ID откуда кливаем
  $("html, body").animate(
    {
      scrollTop: $(".news").offset().top, // класс объекта к которому приезжаем
    },
    1000
  ); // Скорость прокрутки
});

$("#menu-news").click(function () {
  // ID откуда кливаем
  $("html, body").animate(
    {
      scrollTop: $(".news").offset().top,
    },
    1000
  );
});

$("#menu-team").click(function () {
  // ID откуда кливаем
  $("html, body").animate(
    {
      scrollTop: $(".team").offset().top,
    },
    1000
  );
});

$("#header-team").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".team").offset().top,
    },
    1000
  );
});

$("#partner-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".partner-form").offset().top,
    },
    1000
  );
});

$("#partner-top-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".partner-form").offset().top,
    },
    1000
  );
});

$("#partner-map-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".partner-form").offset().top,
    },
    1000
  );
});

$("#client-top-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".client_form").offset().top,
    },
    1000
  );
});

$("#client-header-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".client_form").offset().top,
    },
    1000
  );
});

//team spoilers
const spoiler1 = document.querySelector(".team__spoiler1");
const spoilerSl1 = document.querySelector(".team__slide-spoiler1");
const spoiler2 = document.querySelector(".team__spoiler2");
const spoilerSl2 = document.querySelector(".team__slide-spoiler2");
const spoiler3 = document.querySelector(".team__spoiler3");
const spoilerSl3 = document.querySelector(".team__slide-spoiler3");
const spoiler4 = document.querySelector(".team__spoiler4");
const spoilerSl4 = document.querySelector(".team__slide-spoiler4");
const btn1 = document.querySelector(".team__btn1");
const btn2 = document.querySelector(".team__btn2");
const btn3 = document.querySelector(".team__btn3");
const btn4 = document.querySelector(".team__btn4");
const slbtn1 = document.getElementById("team__slbtn1");
const slbtn2 = document.getElementById("team__slbtn2");
const slbtn3 = document.getElementById("team__slbtn3");
const slbtn4 = document.getElementById("team__slbtn4");

if (window.innerWidth > 768) {
  btn1.addEventListener("click", function () {
    spoiler2.style.display = "none";
    spoiler3.style.display = "none";
    spoiler4.style.display = "none";
    spoiler1.style.display = "block";
    setTimeout(function () {
      spoiler1.style.display = "none";
    }, 7000);
  });

  btn2.addEventListener("click", function () {
    spoiler1.style.display = "none";
    spoiler3.style.display = "none";
    spoiler4.style.display = "none";
    spoiler2.style.display = "block";
    setTimeout(function () {
      spoiler2.style.display = "none";
    }, 7000);
  });

  btn3.addEventListener("click", function () {
    spoiler1.style.display = "none";
    spoiler2.style.display = "none";
    spoiler4.style.display = "none";
    spoiler3.style.display = "block";
    setTimeout(function () {
      spoiler3.style.display = "none";
    }, 7000);
  });

  btn4.addEventListener("click", function () {
    spoiler1.style.display = "none";
    spoiler3.style.display = "none";
    spoiler2.style.display = "none";
    spoiler4.style.display = "block";
    setTimeout(function () {
      spoiler4.style.display = "none";
    }, 7000);
  });
} else {
  slbtn1.addEventListener("click", function () {
    spoilerSl2.style.display = "none";
    spoilerSl3.style.display = "none";
    spoilerSl4.style.display = "none";
    spoilerSl1.style.display = "block";
    setTimeout(function () {
      spoilerSl1.style.display = "none";
    }, 7000);
  });

  slbtn2.addEventListener("click", function () {
    spoilerSl1.style.display = "none";
    spoilerSl3.style.display = "none";
    spoilerSl4.style.display = "none";
    spoilerSl2.style.display = "block";
    setTimeout(function () {
      spoilerSl2.style.display = "none";
    }, 7000);
  });

  slbtn3.addEventListener("click", function () {
    spoilerSl1.style.display = "none";
    spoilerSl2.style.display = "none";
    spoilerSl4.style.display = "none";
    spoilerSl3.style.display = "block";
    setTimeout(function () {
      spoilerSl3.style.display = "none";
    }, 7000);
  });

  slbtn4.addEventListener("click", function () {
    spoilerSl1.style.display = "none";
    spoilerSl2.style.display = "none";
    spoilerSl3.style.display = "none";
    spoilerSl4.style.display = "block";
    setTimeout(function () {
      spoilerSl4.style.display = "none";
    }, 7000);
  });
}

//Неактивные ссылки на страницы в разработке на тачскринах
if (window.innerWidth < 1024) {
  document.querySelectorAll(".disabledLink").forEach((element) => {
    element.addEventListener(
      "click", function () {
        element.classList.add("disabledLinkSpoiler");
        setTimeout(element.classList.remove("disabledLinkSpoiler"), 4000);
      }
    );
    
  });
}
