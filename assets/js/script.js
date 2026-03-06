const form = document.getElementById("formContato");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const nome = form.nome.value;
  const email = form.email.value;
  const telefone = form.telefone.value;
  const mensagem = form.mensagem.value;

  // WhatsApp
  const texto = `Olá, me chamo ${nome}.\n\nEmail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`;

  const whatsappURL = `https://wa.me/5561984295441?text=${encodeURIComponent(texto)}`;

  window.open(whatsappURL, "_blank");

  // Email (FormSubmit invisível)
  fetch("https://formsubmit.co/ajax/SEUEMAIL@DOMINIO.COM", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      nome,
      email,
      telefone,
      mensagem
    })
  });

  alert("Mensagem enviada com sucesso pelo WhatsApp ✅");

  form.reset();
});
const toggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav nav");

toggle.addEventListener("click", ()=>{
  navMenu.classList.toggle("active");
});
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3500);
