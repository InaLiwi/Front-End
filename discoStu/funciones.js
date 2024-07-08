
let date = new Date();
console.log(date.toISOString().split('T')[0]);

const targetDate = new Date("2023-12-31T00:00:00").getTime();

const countdown = setInterval(function () {
let ahora = new Date().getTime();
let distance = (targetDate - ahora);

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + "d" + hours + "h" + minutes + "m" + seconds + "s ";

if (distance < 0) {
clearInterval(countdown);
document.getElementById("countdown").innerHTML = "¡Ya ha llegado";
}
}, 1000);

// ¿Hacerlo en jQuery?