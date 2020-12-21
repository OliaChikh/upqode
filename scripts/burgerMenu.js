const burgerMenu = document.getElementById('burger__menu');
const navbar = document.getElementById('navbar');
const cross = document.getElementById('cross');
const header = document.getElementById('header');
const slidershow = document.getElementById('slidershow');
burgerMenu.addEventListener('click', openMenu);
function openMenu(){
    navbar.style.display = 'block';
    burgerMenu.style.display = 'none';
    cross.style.display = 'block';
    header.style.backgroundColor = " #00A031";
    slidershow.style.marginTop = "150px"
}
cross.addEventListener('click', closeMenu)
function closeMenu() {
    navbar.style.display = 'none';
    burgerMenu.style.display = 'flex';
    cross.style.display = 'none';
    header.style.backgroundColor = "transparent";
    slidershow.style.marginTop = "0px"
}