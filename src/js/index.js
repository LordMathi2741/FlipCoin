const button = document.getElementById('generate');
const face = document.getElementById('face');
const text = document.getElementById('get-face');
let icon = document.getElementById('icon');
let random

button.addEventListener('click', () => {
  // Create transirion effect for img
    icon.style.transition = '5s ease'
    icon.style.transform = 'rotate(' + random + 'deg)'

 
  random = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  if (random === 1){
    face.classList.remove('flash-green');
    text.classList.remove('visible')
    icon.src = '/src/assets/coin.jpeg';
  }
  else {
    face.classList.add('flash-green');
    text.classList.add('visible')
    icon.src = '/src/assets/face-coin.jpeg';
  }
  
});