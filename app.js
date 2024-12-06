// Fixed header

const headerNavbar = document.querySelector('.header_navbar');
const headerNavbarMobile = document.querySelector('.header_navbar__mobile');
let tabletWidth = window.matchMedia("(max-width: 1280px)")

document.addEventListener('scroll', () => {
  if (tabletWidth.matches) { 
    if (window.scrollY > 0) {
      headerNavbarMobile.style.backgroundColor = '#07086c';
    } else {
       headerNavbarMobile.style.backgroundColor = 'transparent';
    }
  } else {
    if (window.scrollY > 0) {
      headerNavbar.style.backgroundColor = '#07086c';
    } else {
       headerNavbar.style.backgroundColor = 'transparent';
    }
  }
})

// Mobile menu btns

const headerNavbarMobilBtnOpen = document.querySelector('.header_navbar__mobil__btn');
const headerMobileNavbarBtnClose = document.querySelector('.header_mobile--navbar__btn');
const headerMobileNavbar = document.querySelector('.header__mobile--navbar');

headerNavbarMobilBtnOpen.addEventListener('click', () => {
  headerMobileNavbar.style.width = "300px";

})

headerMobileNavbarBtnClose.addEventListener('click', () => {
  console.log(5)
  headerMobileNavbar.style.width = "0";

})

// Slider code

$('.slider-multi').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//   Accordion code

let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let accordion__panel = this.nextElementSibling;
    if (accordion__panel.style.maxHeight) {
        accordion__panel.style.maxHeight = null;
    } else {
        accordion__panel.style.maxHeight = accordion__panel.scrollHeight + "px";
    } 
  });
}