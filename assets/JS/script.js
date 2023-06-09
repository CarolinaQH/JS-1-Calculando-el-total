
//Primero lo que necesito es la información del usuario. Cantidad de computadores y el color que necesita.

function calcular() {

const cantidad = document.querySelector('#cantidad').value;
const color = document.querySelector('#color').value;
const precio = document.querySelector('#precio').innerHTML;

document.querySelector('#resultado_total').innerHTML = cantidad*precio;
document.querySelector('#resultado_cantidad').innerHTML = cantidad;
document.querySelector('#resultado_color').style.backgroundColor = color;


}