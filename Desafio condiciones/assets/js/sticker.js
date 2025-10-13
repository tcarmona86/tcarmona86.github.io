
// Ejercicio de calculo de Sticker
const sticker1 = document.querySelector('#input-sticker1');
const sticker2 = document.querySelector('#input-sticker2');
const sticker3 = document.querySelector('#input-sticker3');
const button = document.querySelector('.btn-s');
const mensaje = document.querySelector('#mensaje');

button.addEventListener('click', function () {
  const total =
    Number(sticker1.value) +
    Number(sticker2.value) +
    Number(sticker3.value);

  if (total > 10) {
    mensaje.innerText = 'Llevas muchos stickers';
  } else {
    mensaje.innerText = `Llevas ${total} sticker${total !== 1 ? 's' : ''}`;
  }
});