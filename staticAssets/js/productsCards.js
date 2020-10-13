// open and close modals

  function openModal(cId) {
    let card = document.getElementById(cId);
    let scrollBackBtn = document.getElementById("scrollBackBtn");
    card.addEventListener('click', function() {
      let mId = "modal" + cId;
      let modal = document.getElementById(mId);
      let html = document.getElementsByTagName("html");
      modal.classList.add("is-active");
      html[0].classList.add("is-clipped");
      scrollBackBtn.style.display = "none";
    });
  }

  function closeModal(e) {
    let btnClose = document.getElementById("btnCloseModal");
    let modal = document.getElementById(e);
    let html = document.getElementsByTagName("html");
    let scrollBackBtn = document.getElementById("scrollBackBtn");
    btnClose.addEventListener('click', modal.classList.remove('is-active'));
    html[0].classList.remove("is-clipped");
    scrollBackBtn.style.display = "block";
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
