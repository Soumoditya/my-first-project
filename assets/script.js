function updateName(){const input=document.getElementById("nameInput");const display=document.getElementById("welcome-msg");if(input && display){if(input.value.length>0){display.innerText="Hello, "+input.value+"!"}else{display.innerText="Welcome"}}}
function changeColor(){const body=document.body;body.classList.toggle("bg-dark");body.classList.toggle("text-white")}
async function fetchAdvice(){const adviceElement=document.getElementById("advice-text");if(!adviceElement)return;try{const response=await fetch("https://api.adviceslip.com/advice");const data=await response.json();adviceElement.innerText="\""+data.slip.advice+"\""}catch(error){adviceElement.innerText="Internet error."}}
function sendMessage(){const msg=document.getElementById("userMsg").value;const status=document.getElementById("status");if(msg.length>0){status.innerText="Message Sent: " + msg;document.getElementById("userMsg").value=""}else{status.style.color="red";status.innerText="Please type a message first!"}}
window.onload=fetchAdvice

function copyUPI(){const upi='soumodityapramanik-1@okicici';navigator.clipboard.writeText(upi);const status=document.getElementById('status');status.innerText='UPI ID Copied!';setTimeout(()=>{status.innerText=''},2000)}
