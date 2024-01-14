
// this is for toggle class use on css 
const head = document.querySelector("header");

window.addEventListener("scroll", function(){

    head.classList.toggle("sticky", window.scrollY >60 )
});
// this is for menu option 
let menu = document.querySelector("#menu");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

