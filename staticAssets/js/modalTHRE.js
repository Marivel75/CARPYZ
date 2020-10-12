// let nextTHRE = document.getElementById("nextTHRE");
// let imgTHRE = document.getElementById("imgTHRE");
// let imgSrc = imgTHRE.src;
// let imagesTHRE = ["THRE_00", "THRE_01", "THRE_02", "THRE_03", "THRE_04", "THRE_05", "THRE_06", "THRE_07", "THRE_08", "THRE_09"];
//
//
// function swapNextTHRE() {
//   if ( Number(imgTHRE.src[imgTHRE.src.length - 5]) + 1 > 0 && Number(imgTHRE.src[imgTHRE.src.length - 5]) + 1 <= imagesTHRE.length - 1 ) {
//     imgTHRE.src = "staticAssets/images/THRE/THRE_0" + (Number(imgTHRE.src[imgTHRE.src.length - 5]) + 1) +".jpg";
//   } else {
//     imgTHRE.src = "staticAssets/images/THRE/THRE_00.jpg";
//   };
//
// };
//
// function swapPreviousTHRE() {
//   if ( Number(imgTHRE.src[imgTHRE.src.length - 5]) - 1 >= 0 && Number(imgTHRE.src[imgTHRE.src.length - 5]) - 1 <= imagesTHRE.length - 1 ) {
//     imgTHRE.src = "staticAssets/images/THRE/THRE_0" + (Number(imgTHRE.src[imgTHRE.src.length - 5]) - 1) +".jpg";
//   } else {
//     imgTHRE.src = "staticAssets/images/THRE/THRE_09.jpg"
//   };
// };

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
