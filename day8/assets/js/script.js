const mortgageAmount = document.getElementById("mortgageAmount"); 
const mortgageTerm = document.getElementById("mortgageTerm"); 
const interestRate = document.getElementById("interestRate"); 
const calculate = document.getElementById("calculate"); 
const repayment = document.getElementById("repayment")
const interest = document.getElementById("interest")
const monthlyPay = document.getElementById("monthlyPay")
const totalPay = document.getElementById("totalPay")
const placeOutput = document.querySelector(".place-output")
const output = document.querySelector(".output")
const onlyInterestText = document.querySelector("#onlyInterestText")
const changeColor = document.querySelectorAll(".change-color")
const errorMsg = document.querySelectorAll(".errorMsg")
const clearAllData = document.getElementById("clearAllData")
calculate.addEventListener("click", (e)=>{
    e.preventDefault();    
    if(!isNaN(parseFloat(mortgageAmount.value)) && !isNaN(parseFloat(mortgageTerm.value)) && !isNaN(parseFloat(interestRate.value))){
        // r = Annual interest rate (APRC)/12 (months)
        // n = Number of months in total
        placeOutput.style.display = "none";
        output.style.display = "block";
        let r = (parseFloat(interestRate.value)/100)/12;
        let n = parseFloat(mortgageTerm.value)*12;
        let monthlyPayment=parseFloat(mortgageAmount.value)*((r*((1+r)**n))/(((1+r)**n)-1));
        let totalPayment = n*monthlyPayment;
        let onlyInterest = totalPayment - parseFloat(mortgageAmount.value)

        if(repayment.checked){
            monthlyPay.innerText=Math.round(monthlyPayment)
            totalPay.innerText=Math.round(totalPayment)
        }
        else if(interest.checked){
            console.log("only Interest", Math.round(onlyInterest));
            onlyInterestText.innerText="Your total interest"
            monthlyPay.innerText=Math.round(onlyInterest)
            totalPay.innerText=Math.round(totalPayment)
        }
        mortgageAmount.value="";
        mortgageTerm.value="";
        interestRate.value="";
        repayment.checked=false;
        interest.checked=false;
        Array.from(errorMsg).map((error)=>{
            error.style.visibility="hidden";
        })
        Array.from(changeColor).map((change)=>{
            change.style.color="var(--Slate900)";
            change.style.backgroundColor="var(--Slate100)";
        })
    }
    else{
        console.log("Enter valid number")
        Array.from(changeColor).map((change)=>{
            change.style.color="#fff";
            change.style.backgroundColor="red";
        })
        Array.from(errorMsg).map((error)=>{
            error.style.visibility="visible";
        })
    }
})
clearAllData.addEventListener("click", ()=>{
    placeOutput.style.display = "block";
    output.style.display = "none";
    mortgageAmount.value="";
    mortgageTerm.value="";
    interestRate.value="";
    repayment.checked=false;
    interest.checked=false;
})
