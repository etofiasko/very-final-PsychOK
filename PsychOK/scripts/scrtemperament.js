
leafanim.addEventListener("load", function() {
let start = Date.now();

let timer = setInterval(function() {
let timePassed = Date.now() - start;

leafanim.style.left = timePassed / 5 + 'px';

if (timePassed > 3200){ clearInterval(timer);
leafanim.style.visibility = 'hidden';
}
}, 20);
});

function myFunctiondr() {
var element = document.body;
element.classList.toggle("dark-mode");
}
