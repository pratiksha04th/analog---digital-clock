setInterval(() =>{
    let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc'); 
let day =new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;


//digital clock
let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

if(h>12){
    h = h - 12;
    ampm.innerHTML = "PM";
    }

hours.innerHTML = h < 10 ? "0" + h : h;
minutes.innerHTML = m < 10 ? "0" + m : m;   
seconds.innerHTML = s < 10 ? "0" + s : s;
})