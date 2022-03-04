var res=0;
document.getElementById("myBtn").disabled = true;
document.getElementById("myBtn").addEventListener("click", function() {
result();
});
function ans1(){
res=res+5;
document.getElementById("myBtn").disabled = false;
}
function ans2(){
res=res+4;
document.getElementById("myBtn").disabled = false;
}
function ans3(){
res=res+3;
document.getElementById("myBtn").disabled = false;
}
function ans4(){
res=res+2;
document.getElementById("myBtn").disabled = false;
}
function ans5(){
res=res+1;
document.getElementById("myBtn").disabled = false;
}

function result(){
document.getElementById('xyz').play();
alert("Your result is: " + res);
if(res>0 && res<=34){
window.location.href = "melancholic.html";}
else if(res>34 && res<=66){
window.location.href = "sanguine.html";}
else if(res>66 && res<=98){
window.location.href = "phlegmatic.html";}
else{
window.location.href = "choleric.html";}
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("snip");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
modal.style.display = "block";
}
span.onclick = function() {
modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

function myFunctiondr() {
var element = document.body;
element.classList.toggle("dark-mode");
}
