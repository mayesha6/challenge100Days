const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const submit=document.getElementById("submit");
const errorImg=document.querySelectorAll(".error-img");
const images = Array.from(errorImg);
const popUpSection = document.getElementById("pop-up-section")
const popUpMsg = document.getElementById("pop-up-msg")
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
    if(fname.value!="" && lname.value!="" && email.value!="" && password.value!=""){
        if(emailPattern.test(email.value)){
            console.log(email.value);
            email.value="";
            fname.value="";
            lname.value="";
            password.value="";
            images.map((img)=>{
                img.style.display="none";
            }) 
            popUpMsg.innerText = "submit successfully.";
            popUpSection.style.transform="translate(-50%, 40%)"
            setTimeout(()=>{
                popUpSection.style.transform="translate(-50%, -103%)" 
            },3000)
                     
        }
    }
    else{        
        images.map((img)=>{
            img.style.display="block";
        })
        popUpMsg.innerText = "Something is wrong. Please try again.";
        popUpSection.style.transform="translate(-50%, 40%)"
        setTimeout(()=>{
            popUpSection.style.transform="translate(-50%, -103%)" 
        },3000)
    }
    

})