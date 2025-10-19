// Pintar
function pintar(color = 'green') {
  return function(event) {
    event.target.style.backgroundColor = color;
  };
}
const ele1 = document.getElementById("ele1");
ele1.addEventListener("click", pintar('yellow'));

