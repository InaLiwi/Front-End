//Las primeras lineas del codigo es para que al entrar a la pagina solo se muestre el formulario de nombres, al apretar 
//el boton "iniciar juego" este se ocultara y mostrara el resto de la pagina que antes estaba oculta. 
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('contenido').classList.add('ocultar');
});

document.getElementById('boton-iniciar').addEventListener('click',function(event){
  event.preventDefault();

  document.getElementById('formulario').classList.add('ocultar');
  document.getElementById('contenido').classList.remove('ocultar');
});

//Al precionar el boton "iniciar juego" los nombres ingresados en los input del formulario se guardaran y
//se mostraran sus nombres en el <h3> que se encuentra arriba de las imagenes correspondientes a cada jugador
let jugador1 = '';
let jugador2 = '';

document.getElementById('boton-iniciar').addEventListener('click', function(event) {
  event.preventDefault();
  guardarNombres();
  jugador1 = document.getElementById('jugador1').value;
  jugador2 = document.getElementById('jugador2').value;
  if (formulario.style.display !== 'none') {
    formulario.style.display = 'none';
  }
  if (cartas.style.display !== 'block') {
    cartas.style.display = 'block';
  }
});

function guardarNombres(){
  jugador1 = document.getElementById('jugador1').value
  jugador2 = document.getElementById('jugador2').value

  document.getElementById('datos1').textContent = 'Jugador 1: ' + jugador1;
  document.getElementById('datos2').textContent = 'Jugador 2: ' + jugador2;
}


// Obtener los campos de entrada y el botón de apuesta
let ApuestaInput1 = document.getElementById('apuesta1');
let ApuestaInput2 = document.getElementById('apuesta2');
let botonJugar = document.getElementById('boton-jugar');

// Dentro del modal para apostar del jugador 1, al apretar el boton apostar se verificara si el valor numerico ingresado
// es un numero mayor a 500 y menor 10000, si es asi se guardara y se cerrara el modal, si no aparecera una alerta y no se
// guardara el valor ingresado.
document.getElementById('apostar1').addEventListener('click', () => {
    let jugadorApuesta = parseInt(ApuestaInput1.value);
    if (jugadorApuesta >= 500 && jugadorApuesta <= 10000) {
        console.log(`El Jugador 1 apuesta $ ${jugadorApuesta}`);
        botonJugar.disabled = false;
        guardarApuesta(); 
        $('#myModal1').modal('hide'); // Oculta el modal del Jugador 1
    } else {
        alert('Ingrese una cantidad de dinero válida entre $500 y $10000');
    }
});

// Dentro del modal para apostar del jugador 2, al apretar el boton apostar se verificara si el valor numerico ingresado
// es un numero mayor a 500 y menor 10000, si es asi se guardara y se cerrara el modal, si no aparecera una alerta y no se
// guardara el valor ingresado.
document.getElementById('apostar2').addEventListener('click', () => {
    let jugadorApuesta = parseInt(ApuestaInput2.value);
    if (jugadorApuesta >= 500 && jugadorApuesta <= 10000) {
        console.log(`El Jugador 2 apuesta $ ${jugadorApuesta}`);
        botonJugar.disabled = false;
        guardarApuesta(); // Asegúrate de definir esta función si es necesaria
        $('#myModal2').modal('hide'); // Oculta el modal del Jugador 2
    } else {
        alert('Ingrese una cantidad de dinero válida entre 500 y 10000');
    }
});

//El valor a apostar de guardara y mostrara en el <h3> encontrado bajo la imagen de la carta y el dinero del jugador
function guardarApuesta(){
  apuesta1 = document.getElementById('apuesta1').value
  apuesta2 = document.getElementById('apuesta2').value
  document.getElementById('apuest1').textContent = 'Apuesta: $' + apuesta1;
  document.getElementById('apuest2').textContent = 'Apuesta: $' + apuesta2;
}

// Deshabilitamos el botón "Jugar" inicialmente
botonJugar.disabled = true;

//Cada vez que se preciona en boton jugar las rondas incrementaran y se mostraran en el contador de rondas en medio de la pagina

let rondas = 0; 

document.getElementById('boton-jugar').addEventListener('click', function() {
  rondas++; 
  document.getElementById('contador-rondas').innerHTML = rondas; 
});

// Agregar evento de click al botón de jugar
botonJugar.addEventListener('click', () => {
    // Llamar a la función para jugar una ronda
    jugarRonda();
});

//Aqui ingrese todas las images de cartas que se encuentran en la carpeta imagenes y les di un valor numerico.
const imagenes = [
  { nombre: "1_de_gato.png", valor: 20 },
  { nombre: "2_de_gato.png", valor: 2 },
  { nombre: "3_de_gato.png", valor: 3 },
  { nombre: "4_de_gato.png", valor: 4 },
  { nombre: "5_de_gato.png", valor: 5 },
  { nombre: "6_de_gato.png", valor: 6 },
  { nombre: "7_de_gato.png", valor: 7 },
  { nombre: "8_de_gato.png", valor: 8 },
  { nombre: "9_de_gato.png", valor: 9 },
  { nombre: "10_de_gato.png", valor: 10 },
  { nombre: "11_de_gato.png", valor: 11 },
  { nombre: "12_de_gato.png", valor: 12 },
  { nombre: "13_de_gato.png", valor: 13 },
  { nombre: "1_de_taza.png", valor: 20 },
  { nombre: "2_de_taza.png", valor: 2 },
  { nombre: "3_de_taza.png", valor: 3 },
  { nombre: "4_de_taza.png", valor: 4 },
  { nombre: "5_de_taza.png", valor: 5 },
  { nombre: "6_de_taza.png", valor: 6 },
  { nombre: "7_de_taza.png", valor: 7 },
  { nombre: "8_de_taza.png", valor: 8 },
  { nombre: "9_de_taza.png", valor: 9 },
  { nombre: "10_de_taza.png", valor: 10 },
  { nombre: "11_de_taza.png", valor: 11 },
  { nombre: "12_de_taza.png", valor: 12 },
  { nombre: "13_de_taza.png", valor: 13 },
  { nombre: "1_de_sombreror.png", valor: 20 },
  { nombre: "2_de_sombreror.png", valor: 2 },
  { nombre: "3_de_sombreror.png", valor: 3 },
  { nombre: "4_de_sombreror.png", valor: 4 },
  { nombre: "5_de_sombreror.png", valor: 5 },
  { nombre: "6_de_sombreror.png", valor: 6 },
  { nombre: "7_de_sombreror.png", valor: 7 },
  { nombre: "8_de_sombreror.png", valor: 8 },
  { nombre: "9_de_sombreror.png", valor: 9 },
  { nombre: "10_de_sombreror.png", valor: 10 },
  { nombre: "11_de_sombreror.png", valor: 11 },
  { nombre: "12_de_sombreror.png", valor: 12 },
  { nombre: "13_de_sombreror.png", valor: 13 },
  { nombre: "1_de_sombreroa.png", valor: 20 },
  { nombre: "2_de_sombreroa.png", valor: 2 },
  { nombre: "3_de_sombreroa.png", valor: 3 },
  { nombre: "4_de_sombreroa.png", valor: 4 },
  { nombre: "5_de_sombreroa.png", valor: 5 },
  { nombre: "6_de_sombreroa.png", valor: 6 },
  { nombre: "7_de_sombreroa.png", valor: 7 },
  { nombre: "8_de_sombreroa.png", valor: 8 },
  { nombre: "9_de_sombreroa.png", valor: 9 },
  { nombre: "10_de_sombreroa.png", valor: 10 },
  { nombre: "11_de_sombreroa.png", valor: 11 },
  { nombre: "12_de_sombreroa.png", valor: 12 },
  { nombre: "13_de_sombreroa.png", valor: 13 }
];

//Cada jugador tendra una baraja completa de cartas (52) las cuales se asignaran a cada jugador
let imagenesAsignadas = [[], []];
let contadorRondas = 0; // Contador de rondas

document.getElementById('boton-jugar').addEventListener('click', function() {
  rondas++; // Incrementamos el contador de rondas
  document.getElementById('contador-rondas').innerHTML = rondas; // Actualizamos el texto del contador

//Las imagenes que fueron asignadas para cada jugador se mostraran en <img> asignado para cada jugador de forma aleatoria
//y sin repetirse. 
  let imagen1 = seleccionarImagenAleatoria(imagenes, imagenesAsignadas[0]);
  let imagen2 = seleccionarImagenAleatoria(imagenes, imagenesAsignadas[1]);

  let valorImagen1 = imagenes.find(img => img.nombre === imagen1).valor;
  let valorImagen2 = imagenes.find(img => img.nombre === imagen2).valor;

  document.getElementById('imagen1').src = `/seccion2/Paula_S/Prueba3/imagenes/${imagen1}`;
  document.getElementById('imagen2').src = `/seccion2/Paula_S/Prueba3/imagenes/${imagen2}`;

  imagenesAsignadas[0].push(imagen1);
  imagenesAsignadas[1].push(imagen2);

  //Para determinar quien es el ganador se comparan los valores de las imagenes mostradas y se muestra el resultado en
  //el <h4> con id "sms".
  if (valorImagen1 > valorImagen2) {
    document.getElementById('sms').textContent = "Ganador: Jugador 1";
    sumarApuestaAlDinero(1, 2);
  } else if (valorImagen2 > valorImagen1) {
    document.getElementById('sms').textContent = "Ganador: Jugador 2";
    sumarApuestaAlDinero(2, 1);
  } else {
    document.getElementById('sms').textContent = "Empate en esta ronda";
    contadorEmpates++; // Incrementar el contador de empates
  }
});

//En este function las imagenes se seleccionan de forma aleatoria mientras no se encuentren ya el la lista de imagenesAsignadas
function seleccionarImagenAleatoria(imagenes, imagenesAsignadas) {
    let imagen;
    do {
        imagen = imagenes[Math.floor(Math.random() * imagenes.length)].nombre;
    } while (imagenesAsignadas.includes(imagen));
    return imagen;
}

let contadorGanadasJugador1 = 0;
let contadorGanadasJugador2 = 0;
let contadorEmpates = 0; // Inicializar el contador de empates

//Para realizar la suma y resta del dinero 
function sumarApuestaAlDinero(jugadorGanador, jugadorPerdedor) {
  // Obtener valores numéricos
  let dineroGanador = parseInt(document.getElementById(`dinero${jugadorGanador}`).textContent);
  let apuesta = parseInt(document.getElementById(`apuesta${jugadorPerdedor}`).value);

  // Validar que apuesta sea un número válido
  if (isNaN(apuesta)) {
    alert('Ingrese una cantidad de dinero válida entre 500 y 10000');
    return;
  }

  // Actualizar dinero del ganador 
  document.getElementById(`dinero${jugadorGanador}`).textContent = dineroGanador + apuesta;

  // Actualizar dinero del perdedor
  let dineroPerdedor = parseInt(document.getElementById(`dinero${jugadorPerdedor}`).textContent);
  document.getElementById(`dinero${jugadorPerdedor}`).textContent = dineroPerdedor - apuesta;

   // Incrementar el contador de partidas ganadas del jugador ganador
   if (jugadorGanador === 1) {
    contadorGanadasJugador1++;
  } else if (jugadorGanador === 2) {
    contadorGanadasJugador2++;
  }
  
}

//Recopila las partidas ganadas de cada jugador y las muestra en el modal al terminar la partida
function mostrarContadoresGanadas() {
  document.getElementById('contador-ganadas-jugador1').textContent = contadorGanadasJugador1;
  document.getElementById('contador-ganadas-jugador2').textContent = contadorGanadasJugador2;
  $('#modalContadorGanadas').modal('show');
}

//Al presionar el boton "terminar partida" se reinicia la pagina
function reiniciarJuego() {
  // Utilizar location.reload() para recargar la página
  location.reload();
}
document.getElementById('boton-terminar').addEventListener('click', function() {
  reiniciarJuego();
});








  
