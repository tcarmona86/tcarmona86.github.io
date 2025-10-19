let colorGlobal = 'white';
let OtroColor = 'white';

document.addEventListener('keydown', function (event) {
  const keyDiv = document.getElementById('key');
  const otroDiv = document.getElementById('otro');
  
  if (event.key === 'a') {
    colorGlobal = 'pink';
    keyDiv.style.backgroundColor = colorGlobal;
  } else if (event.key === 's') {
    colorGlobal = 'orange';
    keyDiv.style.backgroundColor = colorGlobal;
  } else if (event.key === 'd') {
    colorGlobal = 'skyblue';
    keyDiv.style.backgroundColor = colorGlobal;
  }
  if (event.key === 'q') {
    OtroColor = 'purple';
    otroDiv.style.backgroundColor = OtroColor;
  } else if (event.key === 'w') {
    OtroColor = 'gray';
    otroDiv.style.backgroundColor = OtroColor;
  } else if (event.key === 'e') {
    OtroColor = 'brown';
    otroDiv.style.backgroundColor = OtroColor;
  }
});
