

let angles = [];
let angleV = [];
let r = 4;

function setup() {
  createCanvas(600, 400);
  background(0);
  let total = floor(width / (r*2));
  for (let i = 0; i < total; i++) {
    angles[i] = map(i, 0, total+1, 0, 2 * TWO_PI);
    // TWO_PI is one cycle of sin
    angleV[i] = 0.01 + i / 100;
  }
}

function draw() {
  //noLoop();
  background(0);
  translate(width/2, height/2);
  //fill(252,238, 33);
  stroke(252,238, 33);
  beginShape();
  noFill();
  for (let i = 0; i < angles.length; i++) {
    let y = map(sin(angles[i]), -1, 1, -180, 180);
    strokeWeight(4);
    let x = map(i, 0, angles.length, -280, 300);
    //line(x, 0, x, y);
    circle(x, y, r);
    // vertex(x, y);
    angles[i] += 0.02;
    //angleV[i] += 0.0001;
  }
  endShape();
  //angleV += 0.0001;
}
