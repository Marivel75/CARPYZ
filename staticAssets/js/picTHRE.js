let mainPic = document.getElementById("mainPic");

function displayPic(pId) {
  console.log('hi');
  mainPic.src = "../staticAssets/images/THRE/" + pId + ".jpg";
}


function swapNext() {
  // let pics = document.getElementById("pics");
  let picsArray = Array.from(pics.getElementsByTagName("img"));
  // let picsSrc = picsArray.map(p => p.src);

  let next = document.getElementById("next");
  let picOnScreen = document.getElementById("p0");
  picOnScreen.classList.add('is-hidden');
  let position = Number(picOnScreen.dataset.position);
  position += 1

  let nextPic = document.querySelector(`[data-position = ${position}]`);
  console.log(nextPic);
  // picId = picOnScreen.id;
  // let n = Number(picId.charAt(picId.length - 1)) + 1;
  // let nextPicId = "p" + n;

}
