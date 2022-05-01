videojs(document.querySelector('.video-js'), {
    language: 'ru',
});
const burger = document.querySelector('.header__burger');
const mobMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.mobile-menu__close');
const body = document.querySelector('body');
burger.addEventListener('click', () => {
    mobMenu.classList.add('active');
    body.classList.add('overflow');
});
menuClose.addEventListener('click', () => {
    mobMenu.classList.remove('active');
    body.classList.remove('overflow');
});