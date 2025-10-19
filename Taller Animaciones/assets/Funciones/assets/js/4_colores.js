//colores
function colores(color = 'blue') {
  return function(event) {
    event.target.style.backgroundColor = color;
  };
}
const col1 = document.getElementById("color_1");
col1.addEventListener("click", colores('black'));

function colores(color = 'red') {
  return function(event) {
    event.target.style.backgroundColor = color;
  };
}
const col2 = document.getElementById("color_2");
col2.addEventListener("click", colores('black'));

function colores(color = 'red') {
  return function(event) {
    event.target.style.backgroundColor = color;
  };
}
const col3 = document.getElementById("color_3");
col3.addEventListener("click", colores('black'));

function colores(color = 'yellow') {
  return function(event) {
    event.target.style.backgroundColor = color;
  };
}
const col4 = document.getElementById("color_4");
col4.addEventListener("click", colores('black'));

