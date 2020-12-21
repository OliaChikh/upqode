const scroll = document.getElementById("header");

// var navbar = document.querySelector('nav')


window.onscroll = () => {
    if (window.scrollY > document.documentElement.clientHeight ) {
        scroll.classList.add('scroll')
    } else {
        scroll.classList.remove('scroll')
    }
};