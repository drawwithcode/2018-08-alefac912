// global variables
var value = 10;
var n = 0;
var frame = [];


function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Instructions
  x = width / 2;
  y = height / 2;
  fill(0, 0, 255);
  textAlign(CENTER, CENTER);
  //textFont("Patua One");
  textSize(48);
  text("Say Hi to a Bear,", x, y - 64);
  text("Shake your phone!", x, y);
  textSize(24);
  text("(or move your mouse)", x, y + 64);

  // frames array
  for (var i = 0; i < 45; i++) {
    frame[i] = loadImage('./assets/bear_' + i + '.jpg');
  }

  // shake threshold setting
  //setShakeThreshold();
}

function draw() {
  // bear frames display
  if (value > 20) {
    imageMode(CENTER);
    image(frame[n], width / 2, height / 2);
  }
}

function mouseMoved() {
  value += 1;
  var mod = value % 5
  if (mod == 0) {
    n += 1;
  }
  if (n > 44) {
    n = 0;
  }
}

function deviceShaken() {
  value += 1;
  if (value > 20) {
    n += 1;
  } else {
    n = 0;
  }
  if (n > 44) {
    n = 0;
  }
}
