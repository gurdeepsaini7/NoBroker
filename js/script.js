// Click on menu button =======>

const nav = document.getElementById('nav');
const menu_button = document.querySelector('.menu-button');

menu_button.addEventListener('click', () => {
    nav.classList.toggle('active');
});



// Swiper Starts ======>

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      200:{
        slidesPerView: 1,
      },
      610: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
      },
    }
  });

// Contact Us Dropdown ======>

const contact_up = document.querySelector('.contact-up');
const contact_down = document.querySelector('.contact-down');
const contact_us = document.querySelector('.menu-list');
const contact_dropdown = document.querySelector('.contact-dropdown');

// contact_down.style.display = 'none';

contact_dropdown.addEventListener('click', () => {
  
  contact_dropdown.classList.toggle('active-dropdown-sign');
  contact_us.classList.toggle('active-contact-us');
});