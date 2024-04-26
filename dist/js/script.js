// Navbar active on scroll
var navClass = document.querySelector('.navbar');
let mybutton = document.getElementById("btnOnTop");


window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navClass.classList.add('navbar-solid');
    navClass.classList.remove('bg-transparent');
    mybutton.style.display = "block";
  } else {
    navClass.classList.remove('navbar-solid');
    mybutton.style.display = "none";

  }

}


// Count up animation
const counters = document.querySelectorAll('.counter span.number');
const container = document.querySelector('.counters');
let activated = false;
window.addEventListener('scroll', () => {
  if (window.pageYOffset > container.offsetTop - container.offsetHeight - 300 && activated === false) {
    counters.forEach((counter) => {
      let target = parseInt(counter.dataset.count);
      let count = 0;
      const updateCount = () => {
        const increment = target / 200; // Untuk membuat animasi lebih halus, dibagi dengan jumlah iterasi
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    activated = true;
  } else if ((window.pageYOffset < container.offsetTop - container.offsetHeight - 500 || window.pageYOffset === 0) && activated === true) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    activated = false;
  }
});


// Slider
$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});



// Scroll on top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
