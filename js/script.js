// scroll up ------------------------
window.addEventListener('scroll', function () {
    var scrollUpButton = document.querySelector('.scroll-up');
    var scrollPosition = window.scrollY;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > (documentHeight / 2)) {
        scrollUpButton.classList.add('show');
    } else {
        scrollUpButton.classList.remove('show');
    }
});

// nav ----------------------------
const btnNav = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelectorAll('.nav__item');

btnNav.addEventListener('click', function () {
    navMenu.classList.add('show');
    overlay.classList.add('show');
});

overlay.addEventListener('click', function () {
    navMenu.classList.remove('show');
    overlay.classList.remove('show');
});


navItems.forEach(function (item) {
    item.addEventListener('click', function () {
        navMenu.classList.remove('show');
        overlay.classList.remove('show');
    });
});

// modal reviews ----------------------
const openModalBtn = document.querySelector('.button');
const closeModalBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const overlayRev = document.querySelector('.overlay-reviews');

function openModal() {
    modal.classList.add('show');
    overlayRev.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
    overlayRev.classList.remove('show');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlayRev.addEventListener('click', closeModal);



