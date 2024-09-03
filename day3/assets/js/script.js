const socialMediaSection=document.getElementById("social-media-section");
const shareBtn=document.getElementById("share-btn");
const authorDetails=document.querySelectorAll(".author-details");
const articleShare=document.querySelectorAll(".article-share");
console.log(socialMediaSection)
shareBtn.addEventListener("click", ()=>{
    socialMediaSection.classList.toggle("social-media-section-block");
    authorDetails[0].classList.toggle("author-visibility");
    articleShare[0].classList.toggle("article-share-bg");
})