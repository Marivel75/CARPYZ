let loadingTime;

function loaderFunction() {
  loadingTime = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("carpyzContent").style.display = "block";
}
