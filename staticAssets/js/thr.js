
// Active links in navbar, events listeners are inline javascript
  function activeLink(eId) {
    let e = document.getElementById(eId);
    e.classList.add("navHover");
  }

  function inactiveLink(eId) {
    let e = document.getElementById(eId);
    e.classList.remove("navHover");
  }


// slideshow
let picIndex = 0;
pics(picIndex);

function swapPic(n) {
  pics(picIndex += n);
}

// Thumbnail pics controls
function currentPic(n) {
  pics(picIndex = n);
}

function pics(n) {
  let picsTHR = document.getElementsByClassName('picTHR');
  if (n > picsTHR.length - 1) picIndex = 0;
  if (n < 0) picIndex = picsTHR.length - 1;
  for (let pic of picsTHR) {
    pic.style.display = 'none';
  }
  console.log(picIndex);
  picsTHR[picIndex].style.display = 'block'
};
