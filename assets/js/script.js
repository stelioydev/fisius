const slides = document.querySelectorAll(".slide")
let current = 0

function nextSlide(){

slides[current].classList.remove("active")

current++

if(current >= slides.length){
current = 0
}

slides[current].classList.add("active")

}

setInterval(nextSlide,5000)

const depoimentos = document.querySelectorAll(".depoimento")

let depoIndex = 0

function nextDepo(){

depoimentos[depoIndex].classList.remove("active")

depoIndex++

if(depoIndex >= depoimentos.length){
depoIndex = 0
}

depoimentos[depoIndex].classList.add("active")

}

setInterval(nextDepo,6000)