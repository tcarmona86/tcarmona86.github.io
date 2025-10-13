// Ejercicio Borde
const img = document.querySelector('#img1');

img1.addEventListener('click', function (){
    if (img1.style.border != '') {
        img1.style.border = '';

    }
    else {
    img1.style.border = '2px solid red';
    }
});

