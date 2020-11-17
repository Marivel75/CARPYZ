let positionsY = [848, 1947, 3262, 4448, 5370, 6408, 7210, 8280, 9651, 10537, 11626, 12686, 13412]

let scrollDownBtns = Array.from(document.querySelectorAll("button[data-title='Go down']"));
let scrollUpBtns = Array.from(document.querySelectorAll("button[data-title='Go up']"));

for (let btn of scrollDownBtns) {
  let index = scrollDownBtns.indexOf(btn);
  btn.addEventListener('click', () => {
    window.scrollTo(0, positionsY[index]);
  });
};

for (let btn of scrollUpBtns) {
  let index = scrollUpBtns.indexOf(btn) - 1;
  btn.addEventListener('click', () => {
    window.scrollTo(0, positionsY[index]);
  });
};

// scrollback button
  // Get the button
  let scrollBackBtn = document.getElementById("scrollBackBtn");
  let navbarMenuItems = document.getElementById("navBarMenuItems");
  // When the user scrolls down from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollBackBtn.style.display = "block";
    } else {
      scrollBackBtn.style.display = "none";
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
