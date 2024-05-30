document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    const icon = document.querySelector(".menu-button");
    icon.style.display = "none";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";

    const icon = document.querySelector(".menu-button");
    icon.style.display = "block";
  }
  const toggleButton1 = document.querySelector(".close-button");
  if (toggleButton1) {
    toggleButton1.addEventListener("click", hideSidebar);
  }
  const toggleButton = document.querySelector(".menu-button");
  if (toggleButton) {
    toggleButton.addEventListener("click", showSidebar);
  }

  const navDropdowns = document.querySelector(".dropbtn");
  if (navDropdowns) {
    navDropdowns.addEventListener("click", myFunction);
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("i-down").classList.toggle("i-down-c");
    document.getElementById("i-up").classList.toggle("i-up-c");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  // const mobileNavShow = document.querySelector('.mobile-nav-show');
  // const mobileNavHide = document.querySelector('.mobile-nav-hide');

  // document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  //   el.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     mobileNavToogle();
  //   })
  // });

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavShow.classList.toggle('d-none');
  //   mobileNavHide.classList.toggle('d-none');
  // }

  // document.querySelectorAll('#navbar a').forEach(navbarlink => {

  //   if (!navbarlink.hash) return;

  //   let section = document.querySelector(navbarlink.hash);
  //   if (!section) return;

  //   navbarlink.addEventListener('click', () => {
  //     if (document.querySelector('.mobile-nav-active')) {
  //       mobileNavToogle();
  //     }
  //   });

  // });

  // const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  // navDropdowns.forEach(el => {
  //   el.addEventListener('click', function(event) {
  //     if (document.querySelector('.mobile-nav-active')) {
  //       event.preventDefault();
  //       this.classList.toggle('active');
  //       this.nextElementSibling.classList.toggle('dropdown-active');

  //       let dropDownIndicator = this.querySelector('.dropdown-indicator');
  //       dropDownIndicator.classList.toggle('bi-chevron-up');
  //       dropDownIndicator.classList.toggle('bi-chevron-down');
  //     }
  //   })
  // });

  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
