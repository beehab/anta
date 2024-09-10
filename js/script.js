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
// Отримуємо елементи кнопки, меню, оверлея та пункти меню
const btnNav = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelectorAll('.nav__item');

// Функція для відкриття меню та оверлея
btnNav.addEventListener('click', function () {
    navMenu.classList.add('show'); // Відкриваємо меню
    overlay.classList.add('show'); // Відкриваємо оверлей
});

// Функція для закриття меню та оверлея при натисканні на оверлей
overlay.addEventListener('click', function () {
    navMenu.classList.remove('show'); // Закриваємо меню
    overlay.classList.remove('show'); // Закриваємо оверлей
});

// Додаємо функцію для закриття меню при натисканні на пункт меню
navItems.forEach(function (item) {
    item.addEventListener('click', function () {
        navMenu.classList.remove('show'); // Закриваємо меню
        overlay.classList.remove('show'); // Закриваємо оверлей
    });
});

// modal reviews ----------------------
// Отримуємо елементи кнопки, модального вікна та оверлея
const openModalBtn = document.querySelector('.button');
const closeModalBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const overlayRev = document.querySelector('.overlay-reviews');

// Функція для відкриття модального вікна та оверлея
function openModal() {
    modal.classList.add('show');
    overlayRev.classList.add('show');
}

// Функція для закриття модального вікна та оверлея
function closeModal() {
    modal.classList.remove('show');
    overlayRev.classList.remove('show');
}

// Додаємо обробники подій
openModalBtn.addEventListener('click', openModal); // Відкриваємо при натисканні на кнопку
closeModalBtn.addEventListener('click', closeModal); // Закриваємо при натисканні на кнопку закриття
overlayRev.addEventListener('click', closeModal); // Закриваємо при натисканні на оверлей



