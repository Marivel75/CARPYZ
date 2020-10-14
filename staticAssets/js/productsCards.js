// open and close modals
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
