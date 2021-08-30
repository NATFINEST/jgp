// Navigation
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

const closeHamburger = () => {
  header.classList.remove('open');
  body.classList.remove('noscroll');
  fadeElems.forEach((element) => {
    element.classList.add('fade-out');
    element.classList.remove('fade-in');
  });
};

const openHamburger = () => {
  header.classList.add('open');
  body.classList.add('noscroll');
  fadeElems.forEach((element) => {
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
  });
};

btnHamburger.addEventListener('click', function (e) {
  e.preventDefault();
  if (header.classList.contains('open')) {
    // Close Hamburger menu
    closeHamburger();
  } else {
    // Open Hamburger menu
    openHamburger();
  }
});

// Scroll to section
document.querySelectorAll('.links').forEach((link) => {
  const linkLocator = link.getAttribute('id');
  link.addEventListener('click', function (event) {
    event.preventDefault;
    if (header.classList.contains('open')) {
      closeHamburger();
    }
    const offsetValue = header.classList.contains('open') ? 50 : 75;
    const top = document.querySelector(linkLocator).offsetTop - offsetValue;
    window.scroll({
      top: top,
      left: 0,
      behavior: 'smooth',
    });
  });
});

// Testimonials
const slider = document.querySelector('.testimonial__slider');
const leftArrow = document.querySelector('.testimonial__controls .left');
const rightArrow = document.querySelector('.testimonial__controls .right');
const indicatorParents = document.querySelector('.testimonial__controls ul');
const indicators = document.querySelectorAll('.testimonial__controls li');

let sectionIndex = 0;

const sliderLength = document.querySelector('.testimonial__slider').children
  .length;
const sliderWidth = sliderLength * 100;
const translateValue = 100 / sliderLength;
document.querySelector('.testimonial__slider').style.width = sliderWidth + '%';

const setIndex = () => {
  document
    .querySelector('.testimonial__controls .selected')
    .classList.remove('selected');
  slider.style.transform = 'translate(' + sectionIndex * -translateValue + '%)';
};

// Left Arrow Click Handler
leftArrow.addEventListener('click', () => {
  sectionIndex > 0 ? sectionIndex-- : (sectionIndex = sliderLength - 1);
  setIndex();
  indicatorParents.children[sectionIndex].classList.add('selected');
});

// Right Arrow Click Handler
rightArrow.addEventListener('click', () => {
  sectionIndex < 2 ? sectionIndex++ : (sectionIndex = 0);
  setIndex();
  indicatorParents.children[sectionIndex].classList.add('selected');
});

// Goto slide by indicator click
indicators.forEach((indicator, index) => {
  indicators.classList;
  indicator.addEventListener('click', () => {
    sectionIndex = index;
    setIndex();
    indicator.classList.add('selected');
  });
});

//Autoplay slider
setInterval(function () {
  rightArrow.click();
}, 5000);
