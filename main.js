const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');

const menu1 = document.querySelector('.menu1');
const menu2 = document.querySelector('.menu2');

const arrow1 = document.querySelector('#arrow1');
const arrow2 = document.querySelector('#arrow2');

const dropdown1 = document.querySelector('#dropdown1');
const dropdown2 = document.querySelector('#dropdown2');

document.addEventListener('DOMContentLoaded', imgResize);
window.addEventListener('resize', imgResize);

link1.addEventListener('click',() => {
    if(menu2.classList.contains('active')) {
        menu2.classList.remove('active');
    }
    if(dropdown2.classList.contains('margin-2')) {
        dropdown2.classList.remove('margin-2');
    }
    dropdown1.classList.toggle('margin');
    menu1.classList.toggle('active');
    if(arrow2.classList.contains('fa-chevron-up')) {
        arrow2.classList.remove('fa-chevron-up');
    }
    arrow1.classList.toggle('fa-chevron-up');
} );

link2.addEventListener('click',() => {
    if(menu1.classList.contains('active')) {
        menu1.classList.remove('active');
    }
     if(dropdown1.classList.contains('margin')) {
        dropdown1.classList.remove('margin');
    }
    dropdown2.classList.toggle('margin-2');
    menu2.classList.toggle('active');
    if(arrow1.classList.contains('fa-chevron-up')) {
        arrow1.classList.remove('fa-chevron-up');
    }
    arrow2.classList.toggle('fa-chevron-up');
} );


const menuBtn = document.querySelector('.menu__btn')
const navList = document.querySelector('.nav__list');
const navMenu = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', () => {
    const menuBars = document.querySelector('.menu__btn i');
    menuBars.classList.toggle('fa-times');
    if(menuBars.classList.contains('fa-times')) {
        navList.classList.add('show');
        navMenu.classList.add('blur')
    } else {
        navList.classList.remove('show');
        navMenu.classList.remove('blur');
    }
});

const heroImg = document.querySelector('.hero__img img');
function imgResize() {
    if(window.innerWidth >= 1200) {
        heroImg.src = 'images/image-hero-desktop.png';
    }
}
