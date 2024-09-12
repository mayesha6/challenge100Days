const birthDate = document.getElementById("birthDate");
const birthMonth = document.getElementById("birthMonth");
const birthYear = document.getElementById("birthYear");
const submit = document.getElementById("submit");
const days = document.getElementById("days");
const months = document.getElementById("months");
const years = document.getElementById("years");
const errorMsg = document.querySelectorAll(".error-msg");
const birthDateErr = document.getElementById("birthDateErr");
const birthMonthErr = document.getElementById("birthMonthErr");
const birthYearErr = document.getElementById("birthYearErr");
let [presentMonth,presentDate,presentYear] = new Date().toLocaleDateString("en-US").split("/")
submit.addEventListener("click", (e)=>{
    e.preventDefault();

    if(!isNaN(parseInt(birthDate.value)) && !isNaN(parseInt(birthMonth.value)) && !isNaN(parseInt(birthYear.value)) && birthDate.value<32 && birthMonth.value<13 && birthYear.value<=presentYear){
        let day, month, year;
        if(parseInt(presentDate)<parseInt(birthDate.value)){
            day = (parseInt(presentDate)+30)-parseInt(birthDate.value);
            presentMonth = presentMonth-1;
            console.log("day: ",day)
            days.innerText = day;
            console.log(day.toString().length)
            if(day.toString().length==1){
                days.innerText = "0"+day;
            }
        }
        else{
            day = parseInt(presentDate)-parseInt(birthDate.value);
            console.log("day: ",day)
            days.innerText = day;
            console.log(day.toString().length)
            if(day.toString().length==1){
                days.innerText = "0"+day;
            }
        }
        if(parseInt(presentMonth)<parseInt(birthMonth.value)){
            month = (parseInt(presentMonth)+12)-parseInt(birthMonth.value);
            presentYear = presentYear-1;
            console.log("month : ",month)
            months.innerText = month;
            console.log(month.toString().length)
            if(month.toString().length==1){
                months.innerText = "0"+month;
            }
        }
        else{
            month = parseInt(presentMonth)-parseInt(birthMonth.value);
            console.log("month : ",month)
            months.innerText = month;
            console.log(month.toString().length)
            if(month.toString().length==1){
                months.innerText = "0"+month;
            }
        }
        year = parseInt(presentYear)-parseInt(birthYear.value);
        console.log("year : ",year)
        years.innerText = year;
        console.log(year.toString().length)
        if(year.toString().length==1){
            years.innerText = "0"+year;
        }
        birthDateErr.style.visibility="hidden"
        Array.from(errorMsg).map((msg)=>{
            msg.style.visibility="hidden"
        })
    }
    else{
        
        Array.from(errorMsg).map((msg)=>{
            if(isNaN(parseInt(birthDate.value)) || birthDate.value>=32){
                birthDateErr.style.visibility="visible"
            }
            else if(isNaN(parseInt(birthMonth.value)) || birthMonth.value>=12){
                birthMonthErr.style.visibility="visible"
            }
            else if(isNaN(parseInt(birthYear.value)) || birthYear.value>presentYear){
                birthYearErr.style.visibility="visible"
            }
            else{
                msg.style.visibility="visible"
            }
            
        })
    }
    
})