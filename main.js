let qanelas;
function preload() {
  qanelas = loadFont('Qanelas.otf');
}

let angles = [];
let angleV = [];
let r = 5;

function setup() {
  createCanvas(600, 400);
  background(0);
  textFont(qanelas);
  textSize(90);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
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
  fill(0);
  stroke('pink');
  beginShape();
  //fill(0);
  for (let i = 0; i < angles.length; i++) {
    let y = map(sin(angles[i]), -1, 1, -160, 140);
    strokeWeight(8);
    //let x = 0;
    //push();
    let x = map(i, 0, angles.length, 10, 10);
    
    //rotate(PI/6);
    text('MILLIE', 0, y);
    //circle(x, y, r);
    // vertex(x, y);
    //pop();
    angles[i] += 0.02;
    //angleV[i] += 0.0001;
  }
  endShape();
  //angleV += 0.0001;
}
