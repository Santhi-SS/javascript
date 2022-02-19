const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['violet','green','blue','yellow','pink'];
body.style.backgroundColor = 'red';
button.addEventListener(click,'changeColor');
function changeColor(){
    const colorIndex = parseInt(Math.random() * colors.length);
     body.style.backgroundColor = colors[colorIndex];
}