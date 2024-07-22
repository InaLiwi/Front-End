
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





//Problema que resolver: Los botones de la seccion eventos no funcionan si estan abajo del contador de tiempo
//y el contador de tiempo no funciona si esta abajo de las funciones para la seccion de eventos.




// funciones.js
const photos = [
  { id: 1, src: 'imagenes/disco1.jpg', alt: '', category: 'eventos' },
  { id: 2, src: 'imagenes/disco2.jpg', alt: '', category: 'galeria' },
  { id: 3, src: 'imagenes/disco3.jpg', alt: '', category: 'blog' },
  // ...
];

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const filters = document.getElementById('filters');
const boxContainer = document.getElementById('box-container');

function renderPhotos(photos) {
  boxContainer.innerHTML = '';
  photos.forEach((photo) => {
    const box = document.createElement('div');
    box.className = 'box';
    box.innerHTML = `<img src="${photo.src}" alt="${photo.alt}">`;
    boxContainer.appendChild(box);
  });
}

function searchPhotos(query) {
  const searchedPhotos = photos.filter((photo) => {
    return photo.alt.toLowerCase().includes(query.toLowerCase());
  });
  renderPhotos(searchedPhotos);
}

function filterPhotos(category) {
  const filteredPhotos = photos.filter((photo) => {
    if (category === 'all') return true;
    return photo.category === category;
  });
  renderPhotos(filteredPhotos);
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  searchPhotos(query);
});

filters.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const category = e.target.getAttribute('data-filter');
    filterPhotos(category);
  }
});

// Renderizar las fotos por defecto
renderPhotos(photos);




// Agregar función para manejar el formulario de inicio de sesión
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar credenciales aquí
  // Si las credenciales son válidas, redirigir al usuario a la página de inicio
  // Si no, mostrar un mensaje de error
  if (username === 'admin' && password === 'password') {
    window.location.href = 'index.html';
  } else {
    alert('Credenciales incorrectas');
  }
});

