const rates = document.getElementById("rate");
const showRate = document.getElementById("show-rate");
const submit = document.getElementById("submit");
const ratingContent = document.getElementById("rating-content");
const submittedState = document.getElementById("submitted-state");
console.log(submit);
Array.from(rates.children).map((rate)=>{
    // console.log(rate);
    rate.addEventListener("click", (e)=>{
        e.preventDefault();
        rate.children[0].classList.add("active");
        Array.from(rates.children).map((othersRate)=>{
            if(rate!=othersRate){
                othersRate.children[0].classList.remove("active");
            }
        })
        console.log(rate.children[0].classList)
        showRate.innerText = rate.innerText;
        submit.addEventListener("click",()=>{
            ratingContent.style.display="none"
            submittedState.style.display="block"
        })
    })
})