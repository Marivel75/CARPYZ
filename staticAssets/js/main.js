// Load logo zoom effect
  // window.addEventListener("load", zoomLogo);

  function zoomLogo() {
    let logo = document.getElementById('logoCarpyz');

      logo.classList.remove("logoMicro");
      logo.classList.add("logoMacro");

  };

// loader opening window
let loadingTime;

function loaderFunction() {
  loadingTime = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("carpyzContent").style.display = "block";
}

// Toggle burger-menu on mobile
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });

// Active links in navbar, events listeners are inline javascript
  function activeLink(eId) {
    let e = document.getElementById(eId);
    e.classList.add("navHover");
  }

  function inactiveLink(eId) {
    let e = document.getElementById(eId);
    e.classList.remove("navHover");
  }


// scrollback button
  // Get the button
  let scrollBackBtn = document.getElementById("scrollBackBtn");
  let navbarMenuItems = document.getElementById("navBarMenuItems");
  // When the user scrolls down from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollBackBtn.style.display = "block";
      navbarMenuItems.classList.remove("is-hidden-tablet", "is-hidden-desktop", "is-hidden-widescreen", "is-hidden-fullhd");
    } else {
      scrollBackBtn.style.display = "none";
      navbarMenuItems.classList.add("is-hidden-tablet", "is-hidden-desktop", "is-hidden-widescreen", "is-hidden-fullhd");
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Toggle button oppacity, events listeners are inline js
  function noOpacity() {
    scrollBackBtn.style.opacity = 1;
  }
  function oppacity() {
    scrollBackBtn.style.opacity = 0.5;
  }


// image slide-in in history text
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
      // halfway through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if(isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    })
  }

  window.addEventListener('scroll', debounce(checkSlide));

  // open and close modals when clicking on cards
    function openModal(cId) {
      let scrollBackBtn = document.getElementById("scrollBackBtn");
      let mId = "modal" + cId;
      let modal = document.getElementById(mId);
      let html = document.getElementsByTagName("html");
      modal.classList.add("is-active");
      html[0].classList.add("is-clipped");
      scrollBackBtn.classList.add("is-hidden");
    }

    function closeModal(e) {
      let scrollBackBtn = document.getElementById("scrollBackBtn");
      let btnClose = document.getElementById("btnCloseModal");
      let modal = document.getElementById(e);
      let html = document.getElementsByTagName("html");
      modal.classList.remove('is-active');
      html[0].classList.remove("is-clipped");
      scrollBackBtn.classList.remove("is-hidden");
    }


  // shadow on a card
    function shadow(cId) {
      let card = document.getElementById(cId);
      card.classList.remove('is-shadowless');
    }

    function noShadow(cId) {
      let card = document.getElementById(cId)
      card.classList.add('is-shadowless');
    }

  // Modal THRE slideshow
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }

  // Modal Turbine slideshow
  let nextTurbine = document.getElementById("nextTurbine");
  let imgTurbine = document.getElementById("imgTurbine");
  let imagesTurbine = ["EOL_00", "EOL_01", "EOL_02", "EOL_03", "EOL_04"];


  function swapNextTurbine() {
    if ( Number(imgTurbine.src[imgTurbine.src.length - 5]) + 1 > 0 && Number(imgTurbine.src[imgTurbine.src.length - 5]) + 1 <= imagesTurbine.length - 1 ) {
      imgTurbine.src = "staticAssets/images/Turbine/EOL_0" + (Number(imgTurbine.src[imgTurbine.src.length - 5]) + 1) +".jpg";
    } else {
      imgTurbine.src = "staticAssets/images/Turbine/EOL_00.jpg";
    };
  };

  function swapPreviousTurbine() {
    if ( Number(imgTurbine.src[imgTurbine.src.length - 5]) - 1 >= 0 && Number(imgTurbine.src[imgTurbine.src.length - 5]) - 1 <= imagesTurbine.length - 1 ) {
      imgTurbine.src = "staticAssets/images/Turbine/EOL_0" + (Number(imgTurbine.src[imgTurbine.src.length - 5]) - 1) +".jpg";
    } else {
      imgTurbine.src = "staticAssets/images/Turbine/EOL_04.jpg"
    };
  };
