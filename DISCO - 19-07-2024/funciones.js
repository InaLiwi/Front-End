/*
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('formulario').classList.add('ocultar');
});

document.getElementById('boton-reservar').addEventListener('click',function(event){
  event.preventDefault();

  document.getElementById('contenido1').classList.add('ocultar');
  document.getElementById('formulario').classList.remove('ocultar');
});



// Configuración del contador regresivo
const countdownDate = new Date("2024-09-15T12:00:00"); // Fecha y hora del próximo evento
const countdownContainer = document.getElementById("countdown-container");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const distance = countdownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");

  if (distance < 0) {
    countdownContainer.innerHTML = "El evento ha comenzado!";
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
*/

document.addEventListener('DOMContentLoaded', function() {
  // Configuración del contador regresivo
  const countdownDate = new Date("2024-09-15T12:00:00"); // Fecha y hora del próximo evento
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  function updateCountdown() {
      const now = new Date();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.textContent = days.toString().padStart(2, "0");
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");

      if (distance < 0) {
          document.getElementById("countdown-container").innerHTML = "El evento ha comenzado!";
      }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Añadir event listener para el botón de reservar
  document.getElementById('boton-reservar').addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('contenido1').classList.add('ocultar');
      document.getElementById('formulario').classList.remove('ocultar');
  });
});
