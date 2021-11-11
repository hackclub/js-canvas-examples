// SET-UP
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const w = canvas.width;
const h = canvas.height;

// DEBLUR (ANTI-ALIASING)
ctx.translate(0.5, 0.5);

// DRAW BACKGROUND
function draw() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, w, h);
}

// DRAW CIRCLE
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(156, 250, 50, 0, Math.PI*2);
  ctx.stroke();

}

// DRAW RECTANGLE
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();

}

// DRAW LINE
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.moveTo(30, 30);
  ctx.lineTo(50,70);
  ctx.stroke();
}

// FILL LINES
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.moveTo(30, 30);
  ctx.lineTo(50,70);
  ctx.lineTo(109,57);
  ctx.closePath()
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}

// STYLE LINES
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(30, 30);
  ctx.lineTo(50,70);
  ctx.closePath()
  ctx.stroke();

}

// COLORED CIRCLE
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(156, 250, 50, 0, Math.PI*2);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();

}

// MOVING CIRCLE
let x = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(x, 250, 50, 0, Math.PI*2);
  ctx.stroke();

  x++;
}

// WRAP AROUND CIRCLE
let x = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(x, 250, 50, 0, Math.PI*2);
  ctx.stroke();

  x = (x + 1)%w;
}

// BOUNCING CIRCLE
let x = 0;
let velocity_x = 1;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(x, 250, 50, 0, Math.PI*2);
  ctx.stroke();

  if (x > w) velocity_x = -1;
  if (x < 0) velocity_x = 1;

  x += velocity_x;
}

// CHANGING COLOR CIRCLE
let h = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(250, 250, 50, 0, Math.PI*2);
  ctx.stroke();
  ctx.fillStyle = `hsl(${h%360}, 100%, 50%)`;
  ctx.fill();

  h++;
}

// OSCILLATING
let step = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  const scale = 50;
  const rate = 1/50;
  const size = Math.abs(Math.sin(step*rate))*scale;
  ctx.beginPath();
  ctx.arc(250, 250, size, 0, Math.PI*2);
  ctx.stroke();

  step++;
}

// REPEATS, LOOPS
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 5; i++) {
    ctx.beginPath()
    ctx.arc(i*45+80, 250, 17, 0, Math.PI*2)
    ctx.stroke()
  }

}

// RANDOMNESS
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.beginPath();
  ctx.arc(100, 250, Math.random()*3+15, 0, Math.PI*2);
  ctx.stroke();
}

// NOISE (PERLIN)


// EVENT KEYDOWN
let x = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  ctx.beginPath();
  ctx.arc(x, 250, 40, 0, Math.PI*2);
  ctx.stroke();
}

window.addEventListener("keydown", e => {
  const key = e.key;
  if (key === "ArrowRight") x += 10;
  if (key === "ArrowLeft") x -= 10;
})

// EVENT MOUSEMOVE
let x = 0;
let y = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, Math.PI*2);
  ctx.stroke();
}

window.addEventListener("mousemove", e => {
  x = e.clientX;
  y = e.clientY;
})

// EVENT MOUSEDOWN
let circles = [];

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    ctx.beginPath();
    ctx.arc(c.x, c.y, 40, 0, Math.PI*2);
    ctx.stroke();
  }
}

window.addEventListener("mousedown", e => {
  circles.push({ x: e.clientX, y: e.clientY })
})

// COLLISION

function checkCollided(r1, r2) {
  return r1.x < r2.x + r2.width &&
         r1.x + r1.width > r2.x &&
         r1.y < r2.y + r2.height &&
         r1.height + r1.y > r2.y;
}

function drawRect(r) {
  ctx.beginPath();
  ctx.rect(r.x, r.y, r.width, r.height);
  ctx.fillStyle = "blue";
  ctx.fill();
}

const rect1 = { x: 20, y: 20, width: 30, height: 30 };
const rect2 = { x: 100, y: 20, width: 30, height: 30 };

let hasCollided = false;

function draw() {
  if (!hasCollided) {
    ctx.fillStyle = "white";
  } else {
    ctx.fillStyle = "red";
  }

  ctx.fillRect(0, 0, w, h);

  drawRect(rect1);
  drawRect(rect2);

  hasCollided = checkCollided(rect1, rect2);
}

window.addEventListener("mousemove", e => {
  rect1.x = e.clientX;
  rect1.y = e.clientY;
})

// TRANSLATE
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.translate(182, 97)
  ctx.strokeRect(0, 0, 105, 50);
  ctx.restore();
}

// ROTATE
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  
  ctx.save();
  ctx.translate(150, 300);
  ctx.rotate(45);
  const rectW = 100;
  const rectH = 50;
  ctx.strokeRect(-rectW/2, -rectH/2, rectW, rectH);
  ctx.restore();
}

// ANIMATED SCALE, ROTATE
let step = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  
  ctx.save();
  ctx.translate(158, 189);
  ctx.rotate(step/100);
  const rectW = step/3;
  const rectH = step/3;
  ctx.strokeRect(-rectW/2, -rectH/2, rectW, rectH);
  ctx.restore();

  step++;
}

// OSCILLATING RECTANGLE
let step = 0;
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  
  ctx.save();
  ctx.translate(158, 189);
  ctx.rotate(step/100);
  const rectW = Math.sin(step/10)*13+100/3;
  const rectH = 40;
  ctx.strokeRect(-rectW/2, -rectH/2, rectW, rectH);
  ctx.restore();

  step++;
}

// ROTATING ACCUMULATION

// ctx.globalCompositeOperation = "destination-under"
let x = w/2;
let y = h/2;
let step = 0;
function draw() {
  ctx.fillStyle = "white";
  // ctx.fillRect(0, 0, w, h);
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(step/13);
  const rectW = Math.sin(step/30)*76 + 105;
  const rectH = Math.sin(step/30)*57 + 66;
  ctx.beginPath();
  ctx.rect(-rectW/2, -rectH/2, rectW, rectH);
  ctx.stroke();
  ctx.fillStyle=`hsl(${step%360}, 100%, 50%)`;
  ctx.fill();
  ctx.restore();

  step++;
}

// SCALE distorts image, these transformations are better to do with vectors


// lines

let angles = [45, 135];
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
ctx.strokeStyle = "black";
for (let i = 0; i < 10; i += 1) {
  for (let j = 0; j < 10; j += 1) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(j * 20+83, i * 20+47);
    ctx.rotate(pick(angles)/180*Math.PI)
    let d = 20*Math.sqrt(2);
    ctx.moveTo(0, d/2);
    ctx.lineTo(0, -d/2);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }
}

// hover

const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill(circle);

canvas.addEventListener('mousemove', function(event) {
  ctx.fillStyle = ctx.isPointInPath(circle, event.offsetX, event.offsetY) ? "green" : "red";

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(circle);
});

