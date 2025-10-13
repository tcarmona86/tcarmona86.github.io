// Ejercicio de contraseñas con tres select

const select1 = document.querySelector('#pselect');
const select2 = document.querySelector('#sselect');
const select3 = document.querySelector('#tselect');
const boton = document.querySelector('.btn-select');
const resultado = document.querySelector('#mensaje');


boton.addEventListener('click', function () {
  const contraseña = select1.value + select2.value + select3.value;
  if (contraseña== '911') {
    mensaje.innerText = 'password 1 correcto';
  } else if (contraseña == '714') {
    mensaje.innerText = 'password 2 es correcto';
  }else {
    mensaje.innerText = 'password incorrecto';
  }
});