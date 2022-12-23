function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  fill(255);
  circle(250 + sin(frameCount * 0.1) * 100, 250, 50);
}
