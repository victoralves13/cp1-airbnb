// RESERVA
const form = document.getElementById("reserva-form");
const msg = document.getElementById("reserva-msg");

form.addEventListener("submit", function(e){
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  msg.textContent = `Reserva confirmada para ${nome}. Enviaremos detalhes para ${email}.`;
  msg.style.color = "green";
  form.reset();
});

// MODAL GALERIA
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const imgs = document.querySelectorAll(".galeria-img");
const closeBtn = document.querySelector(".modal-close");

imgs.forEach(img => {
  img.onclick = () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  }
});

closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; }
