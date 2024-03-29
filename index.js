//Running function 
const btn = document.getElementById("btn");
const form = document.querySelector("form");

form.onsubmit = function (e) {
    e.preventDefault();
}
    btn.onclick = function () {
        calculateAge();
}

//Heading 
document.querySelector("h1").textContent = "Enter your information and the button below"

//Defining current Date 
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();



const calculateAge = () =>{

//Getting input fileds
      InputDay = document.getElementById("Inputday").value;
      InputMonth = document.getElementById("Inputmonth").value;
      InputYear = document.getElementById("Inputyear").value;

    
//Getting output Fileds 
    let outPutDay = document.getElementById("outPutDay");    
    let outPutMonth = document.getElementById("outPutMonth");    
    let outPutYear = document.getElementById("outPutYear");    

//Defining global variables
    var ds = currentDay - InputDay;
    var ms = currentMonth - InputMonth;
    var yrs = currentYear - InputYear;   

//Conditions for input error 
    const day_error = document.getElementById("day-error");
    const month_error = document.getElementById("month-error");
    const year_error = document.getElementById("year-error");

        if(InputDay.length == 0){
            day_error.style.display = `block`;
            ds = "--";
        }else{
            day_error.style.display = `none`;
        }
        if(InputMonth.length == 0){
            month_error.style.display = `block`;
            ms = "--";
        }else{
            month_error.style.display = `none`;
        }
        if(InputYear.length == 0){
            year_error.style.display = `block`;
            yrs = "--";
        }else{
            year_error.style.display = `none`;
            
        }    

//Displaying output
    outPutDay.textContent = ds;
    outPutMonth.textContent = ms;
    outPutYear.textContent = yrs; 


//Adding conditions to render accurate output
    if(ms < 0 || ms == 0 && ds < 0){
        yrs--;
        ms += 12;
    outPutDay.textContent = ds;
    outPutMonth.textContent = ms;
    outPutYear.textContent = yrs; 
    }
    if(ds < 0){
        var prevMonth = new Date(currentYear, currentMonth - 1, 0);
         ds += prevMonth.getDate();
         ms --;
    outPutDay.textContent = ds;
    outPutMonth.textContent = ms;
    outPutYear.textContent = yrs; 
    }

}
