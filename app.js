const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
const hitsPara = document.getElementById('hits');

canvas.width = innerWidth * 0.8;
canvas.height = innerHeight * 0.6;

let x = canvas.width / 2;
let y = canvas.height / 2;
let r = 25;

let dx = 4;
let dy = 3;
let counter = 0;
context.fillStyle = 'blue';

function drawCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, 25, 0, 2 * Math.PI, false);
    context.fill();
}

function increaseDirection() {
    x += dx;
    y += dy;
}

function animate() {
    drawCircle();
    increaseDirection();

    if((x + r) >= canvas.width || (x - r) <= 0) { 
        dx = -dx;
        ++counter;
        hitsPara.textContent = `Eage Hits: ${counter}`;
    }

    if((y + r) >= canvas.height || (y - r) <= 0) { 
        dy = -dy; 
        ++counter;
        hitsPara.textContent = `Eage Hits: ${counter}`;
    }
}

setInterval(animate, 16);
