const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");

}

setInterval(nextSlide,5000);

let depoimentos = document.querySelectorAll(".depoimento");
let atual = 0;

function proximo(){

depoimentos[atual].classList.remove("active");

atual++;

if(atual >= depoimentos.length){
atual = 0;
}

depoimentos[atual].classList.add("active");

}

setInterval(proximo,4000);
