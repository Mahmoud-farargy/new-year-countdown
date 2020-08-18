//references
const year = document.getElementById("year");
const days  = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdownContainer = document.querySelector(".countdown-row");
const loading = document.querySelector(".loading");
   let currentYear = new Date().getFullYear();
    
    const newYearTime  = new Date(`January ${currentYear+1} 00:00:00`);
    year.innerText = currentYear +1;
//calculate time
function countDown(){
    let currentTime = new Date();
    let difference = newYearTime - currentTime;

    let d = Math.floor(difference /1000 /60 /60 /24) ;
    let h = Math.floor(difference /1000 /60 /60) %24 ;
    let m = Math.floor(difference /100 /60) %60 ;
    let s = Math.floor(difference /100) % 60 ;

    days.innerText = d;
    hours.innerText = h < 10 ? "0"+ h : h;
    minutes.innerText = m < 10 ? "0" + m : m;
    seconds.innerText = s < 10 ? "0" + s: s; 
}
setTimeout(()=>{
    loading.remove();
   countdownContainer.style.display = "flex";
},1000);
setInterval(countDown, 1000);
