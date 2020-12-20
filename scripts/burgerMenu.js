const burgerMenu = document.getElementById('burger__menu');
const navbar = document.getElementById('navbar');
const cross = document.getElementById('cross');
burgerMenu.addEventListener('click', openMenu);
function openMenu(){
    navbar.style.display = 'block';
    burgerMenu.style.display = 'none';
    cross.style.display = 'block';
    
}