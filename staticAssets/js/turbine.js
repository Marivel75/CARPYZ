//
// // Active links in navbar, events listeners are inline javascript
//   function activeLink(eId) {
//     let e = document.getElementById(eId);
//     e.classList.add("navHover");
//   }
//
//   function inactiveLink(eId) {
//     let e = document.getElementById(eId);
//     e.classList.remove("navHover");
//   }


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
  let picsTurbine = document.getElementsByClassName('picTurbine');
  if (n > picsTurbine.length - 1) picIndex = 0;
  if (n < 0) picIndex = picsTurbine.length - 1;
  for (let pic of picsTurbine) {
    pic.style.display = 'none';
  }
  console.log(picIndex);
  picsTurbine[picIndex].style.display = 'block'
};
