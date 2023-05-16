(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.burger');
    let nav = document.querySelector('.main-header__nav');

    btn.addEventListener('click', () => {
      btn.classList.toggle('burger_close');
      nav.classList.toggle('nav_open');
      document.body.classList.toggle('stop-scroll');
    })
  })
})();