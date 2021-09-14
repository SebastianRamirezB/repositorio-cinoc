import './styles.css';


//Referencias

const buttonMenu = document.querySelector('.header-icon');
const nav = document.querySelector('.nav');
const buttonNavClose = document.querySelector('.nav-close')



//Eventos
buttonMenu.addEventListener('click', () => {
    nav.classList.add('show');
});

buttonNavClose.addEventListener('click', () => {
    nav.classList.remove('show');
});
