const burgerClose = document.querySelector('.close');
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', mediaNavMenu);
burgerClose.addEventListener('click', removeMediaNavMenu);

function mediaNavMenu() {
    navbar.classList.toggle('show');

    removeBurger();
}

function removeMediaNavMenu() {
    navbar.classList.remove('show');
    removeBurgerClose();
}

function removeBurger() {
    burger.style.display = 'none';
    burgerClose.style.display = 'block';
}

function removeBurgerClose() {
    burger.style.display = 'block';
    burgerClose.style.display = 'none';
}

mediaNavMenu();
removeMediaNavMenu();

const getFullYear = () => {
    const date = new Date();

    const footer = document.querySelector('.footer-info h6 a');

    footer.textContent = date.getFullYear();
};

getFullYear();
