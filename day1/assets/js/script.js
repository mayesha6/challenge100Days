const accordion = document.querySelectorAll(".accordion");

Array.from(accordion).map((acc)=>{
    acc.addEventListener("click",()=>{
        console.log()
        acc.lastChild.previousElementSibling.classList.toggle("acc-ans-block")
        acc.firstChild.nextElementSibling.childNodes[1].classList.toggle("fa-plus")
        acc.firstChild.nextElementSibling.childNodes[1].classList.toggle("fa-minus")
        Array.from(accordion).map((acc2)=>{
            if(acc!=acc2){
                acc2.lastChild.previousElementSibling.classList.remove("acc-ans-block")
                acc2.firstChild.nextElementSibling.childNodes[1].classList.remove("fa-minus")
                acc2.firstChild.nextElementSibling.childNodes[1].classList.add("fa-plus")
            }
        })
    })
})