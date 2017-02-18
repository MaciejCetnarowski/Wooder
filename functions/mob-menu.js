const banner = document.querySelector('.banner-container');
const bannerHeight = banner.offsetHeight;
const mobMenuButton = document.querySelector('.mob-menu-button');
const mobMenu = document.querySelector('.mob-menu');
const mobMenuUl = document.querySelector('.mob-menu ul');

function topMenu() {
    if (window.scrollY >= bannerHeight) {
        mobMenuButton.classList.add('mobile');
    } else {
        mobMenuButton.classList.remove('mobile');
    }
}

function popupMenu(e) {
    mobMenu.classList.toggle('active');
}

function preventDefault(e) {
    e.stopPropagation();
}

window.addEventListener('scroll', topMenu);
mobMenuButton.addEventListener('click', popupMenu);
mobMenu.addEventListener('click', popupMenu);
mobMenuUl.addEventListener('click', preventDefault);
