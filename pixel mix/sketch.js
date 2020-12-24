let imgM, imgN, imgX;

function preload() {
  imgM = loadImage('assets/cat.jpg');
  imgN = loadImage('assets/cute rabits.jpg');
  imgX = loadImage('assets/ra.jpg');
}

function setup() {
  imgM.resize(0, 500);
  imgN.resize(0, 500);
  imgX.resize(0, 500);

  createCanvas(imgM.width, imgM.height);

  imgM.loadPixels();
  imgN.loadPixels();
  imgX.loadPixels();
}

function draw() {

  let x = random(width);
  x = x-(x%50);
  let y = random(height);
  y = y-(y%50);
  let k = random(3);
  k = floor(k);
  let c;

  switch (k) {
    case 0:

      c = imgX.get(x, y, 50, 50);
      break;

    case 1:
      c = imgM.get(x, y, 50, 50);
      break;

    case 2:
      c = imgN.get(x, y, 50, 50);
      break;
  }
  image(c, x, y);

}