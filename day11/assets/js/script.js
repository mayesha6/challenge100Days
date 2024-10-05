const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");
menuIcon.addEventListener("click", ()=>{
    menu.style.display="block";
    closeIcon.style.display="block";
    menuIcon.style.display="none";

})
closeIcon.addEventListener("click", ()=>{
    menu.style.display="none";
    closeIcon.style.display="none";
    menuIcon.style.display="block";

})