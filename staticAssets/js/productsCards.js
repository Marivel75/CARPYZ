// open and close modals

  function openModal(cId) {
    let card = document.getElementById(cId);
    let scrollBackBtn = document.getElementById("scrollBackBtn");
    card.addEventListener('click', function() {
      let mId = "modal" + cId;
      let modal = document.getElementById(mId);
      modal.classList.add("is-active");
      scrollBackBtn.style.display = "none";
    });
  }

  function closeModal(e) {
    let btnClose = document.getElementById("btnCloseModal");
    let modal = document.getElementById(e);
    btnClose.addEventListener('click', modal.classList.remove('is-active'));
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
