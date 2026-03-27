function updateName(){const i=document.getElementById("nameInput"),d=document.getElementById("welcome-msg");i&&d&&(d.innerText=i.value.length>0?"Hello, "+i.value+"!":"Welcome")}
function changeColor(){document.body.classList.toggle("bg-dark");document.body.classList.toggle("text-white")}
async function fetchAdvice(){const e=document.getElementById("advice-text");if(e)try{const t=await fetch("https://api.adviceslip.com/advice"),a=await t.json();e.innerText="\""+a.slip.advice+"\""}catch(n){e.innerText="Error."}}
function sendMessage(){const e=document.getElementById("userMsg").value,t=document.getElementById("status");e.length>0?(t.innerText="Message Sent: "+e,document.getElementById("userMsg").value=""): (t.style.color="red",t.innerText="Type a message!")}
function copyUPI(){const u="soumodityapramanik-1@okicici";navigator.clipboard.writeText(u);const s=document.getElementById("status");s.style.color="green";s.innerText="UPI ID Copied!";setTimeout(()=>{s.innerText=""},2000)}
window.onload=fetchAdvice

function updateClock(){const now=new Date();const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};document.getElementById('clock').innerText=now.toLocaleTimeString('en-US',{hour12:true,hour:'2-digit',minute:'2-digit',second:'2-digit'});document.getElementById('date').innerText=now.toLocaleDateString('en-US',options)} setInterval(updateClock,1000);window.onload=()=>{fetchAdvice();updateClock();}
