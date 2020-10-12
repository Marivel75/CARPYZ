// Load logo zoom effect
window.addEventListener("load", zoomLogo);

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

function zoomLogo() {
  let logo = document.getElementById('logoCarpyz');

    logo.classList.remove("logoMicro");
    logo.classList.add("logoMacro");

};

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
