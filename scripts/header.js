const scroll = document.getElementById("header");

const headerInit = () => {
    window.onscroll = () => {
    if (window.scrollY > document.documentElement.clientHeight ) {
        scroll.classList.add('scroll')
    } else {
        scroll.classList.remove('scroll')
    }
}
};

let slideIndex = 1;

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slideshow__image");
  let dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot_green", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "dot_green";
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}



window.plusDivs = plusDivs;
window.currentDiv = currentDiv;
window.showDivs = showDivs;
showDivs(slideIndex);
headerInit();
module.exports = header;