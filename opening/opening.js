var opening_siwa;
var image_siwa;

function preload() {
  opening_siwa = loadSound("opening_siwa.mp3");
  image_siwa = loadImage("siwa.jpg");
}

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  opening_siwa.play();
  image(image_siwa, windowWidth/2, windowHeight/2, width, height);
}
