const email=document.getElementById("email");
const submit=document.getElementById("submit");
const errorMsg=document.getElementById("error-msg");
const errorImg=document.getElementById("error-img");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
    if(emailPattern.test(email.value)){
        console.log(email.value);
        email.value="";
        errorMsg.innerText="Successfully Submitted.";
        errorImg.style.display="none";

        
    }
    else{        
        errorMsg.innerText="Please provide a valid email";
        errorImg.style.display="block";
    }
})