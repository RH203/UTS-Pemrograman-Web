// Navbar active on scroll
var navClass = document.querySelector('.navbar');

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navClass.classList.add('navbar-solid');
        navClass.classList.remove('bg-transparent');
      } else {
        navClass.classList.remove('navbar-solid');
      }
    }
