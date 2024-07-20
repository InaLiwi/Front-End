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

//Problema que resolver: Los botones de la seccion eventos no funcionan si estan abajo del contador de tiempo
//y el contador de tiempo no funciona si esta abajo de las funciones para la seccion de eventos.


// En tu archivo funciones.js
document.querySelectorAll('.btn-reservar').forEach(function(button) {
  button.addEventListener("click", function() {
    // Ocultar las cartas
    document.getElementById("contenido1").style.display = "none";
    
    // Mostrar el formulario de reserva
    document.getElementById("formulario-reserva").style.display = "block";
  });
});

// Seleccionar el formulario
const formularioReserva = document.getElementById("formulario-reserva");

// Agregar función de validación al formulario
formularioReserva.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

  // Seleccionar todos los campos del formulario
  const campos = formularioReserva.elements;

  // Inicializar una variable para indicar si el formulario es válido
  let formularioValido = true;

  // Recorrer todos los campos del formulario
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];

    // Verificar si el campo es obligatorio y está vacío
    if (campo.required && campo.value.trim() === "") {
      formularioValido = false;
      campo.classList.add("invalido"); // Agregar clase CSS para indicar que el campo es inválido
    } else {
      campo.classList.remove("invalido"); // Quitar clase CSS para indicar que el campo es válido
    }
  }

  // En tu archivo funciones.js
const formularioReserva = document.getElementById("formulario-reserva");
const modalContainer = document.getElementById("modal-container");
const modalBody = document.getElementById("modal-body");

formularioReserva.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

  // Recopilar los datos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  // Crear el contenido del modal
  const modalContent = `
    <h2>Reserva confirmada</h2>
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Teléfono: ${telefono}</p>
  `;

  // Mostrar el modal
  modalBody.innerHTML = modalContent;
  modalContainer.style.display = "block";
});

// Agregar un botón para cerrar el modal
const closeModalButton = document.getElementById("close-modal-button");
closeModalButton.addEventListener("click", function() {
  modalContainer.style.display = "none";
});

  // Si el formulario es válido, enviarlo
  if (formularioValido) {
    // Enviar el formulario aquí
    console.log("Formulario enviado con éxito!");
  } else {
    console.log("Por favor, rellene todos los campos obligatorios");
  }
});




