// menu 
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const menuCloseBtn = document.getElementById("menu-close-btn");

menuIcon.addEventListener("click", ()=>{
    menu.style.display="block";
    menuIcon.style.display="none";
    menuCloseBtn.style.display="block"
})
menuCloseBtn.addEventListener("click", ()=>{
    menu.style.display="none";
    menuCloseBtn.style.display="none"
    menuIcon.style.display="block"
})

// testimonial slider
let slide = new Swiper('.slide', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
     delay: 3000,
   },
});
