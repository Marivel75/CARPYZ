let positions = ['#pos-1', '#pos-2', '#pos-3', '#pos-4', '#pos-5', '#pos-6', '#pos-7', '#pos-8', '#pos-9', '#pos-10', '#pos-11', '#pos-12', '#pos-13', '#pos-14']

let scrollBtn = document.getElementsByClassName('scrollBtn')


for (let btn of scrollBtn) {
  btn.addEventListener('click', () => {
    let action = btn.parentNode.attributes[0].textContent;
    for (let pos of positions) {
      if (action === pos) {
        console.log(positions.indexOf(pos) + 1);
      }
    }
  });
};
