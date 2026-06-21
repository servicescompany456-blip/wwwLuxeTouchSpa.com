const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn && nav){


menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
});


}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {


link.addEventListener("click", () => {
    nav.classList.remove("show-menu");
});


});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


anchor.addEventListener("click", function(e) {

    const target = document.querySelector(
        this.getAttribute("href")
    );

    if(target){

        e.preventDefault();

        target.scrollIntoView({
            behavior:"smooth"
        });

    }

});


});

window.addEventListener("scroll", () => {


const header = document.querySelector("header");

if(window.scrollY > 50){

    header.style.boxShadow =
    "0 5px 20px rgba(0,0,0,.4)";

}else{

    header.style.boxShadow = "none";

}


});

console.log("Luxe Touch Spa Loaded Successfully");
