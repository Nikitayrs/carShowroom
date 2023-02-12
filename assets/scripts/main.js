// Header
let header = document.querySelector(".header");

// Scroll header
window.onscroll = function MenuScroll(){
    if(window.pageYOffset > 88){
        header.classList.add("header__scroll");
    }
    else{
        header.classList.remove("header__scroll");
    }
}