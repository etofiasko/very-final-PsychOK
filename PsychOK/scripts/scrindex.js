$(document).ready(function(){
$(".mousefun").mouseover(function(){
$(".mousefun").css("background-color", "#7eb394");
});
$(".mousefun").mouseout(function(){
$(".mousefun").css("background-color", "transparent");
});
});
 
window.onscroll = function() {myFunction()};
  
function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}

var modal = document.getElementById("myModal2");
var btn = document.getElementById("snip2");
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

$(document).ready(function(){
$("#submitBtn").click(function(){        
$("#myForm").submit();
alert("Thank you! We will call you in 15 minutes.");
});
});

function myFunctiondr() {
var element = document.body;
element.classList.toggle("dark-mode");
}
 
$(window).scroll(function () { 
if ($(window).scrollTop() > $('body').height() / 10) {
$('#upArrow').fadeTo(500, 1);
}
});

$('#upArrow').click(function(){
$("html, body").animate({ scrollTop: 0 }, "slow");
});
