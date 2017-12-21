var opening_wode;
var image_wode;

function preload() {
  opening_wode = loadSound("wodeshi.mp3");
  image_wode = loadImage("wode.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  opening_wode.play();
  opening_wode.onended( () => {
    window.location.href = "../3.%20explain/index.html";
  });
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(image_wode, windowWidth/2, windowHeight/2, height/3.5*1.2, height/3.5);
}
