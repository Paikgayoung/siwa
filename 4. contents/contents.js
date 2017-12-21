var am9_34, pm2_10, pm4_27, pm7_56, pm10_19, start;
var buttons = [];

var image_siwa_gray;

class Button {
  constructor(x, y, sub, title, callback) {
    this.x = x;
    this.y = y;
    this.sub = sub;
    this.title = title;
    this.size = width/6;
    this.callback = callback;
  }

  draw() {
    noStroke();
    fill(255);
    let ts = width/45;
    textSize(ts);
    textAlign(CENTER, CENTER);
    text(this.title, this.x, this.y);
    let titleWidth = textWidth(this.title);
    textAlign(LEFT, BASELINE);
    textSize((ts) * 0.7777777778);
    text(this.sub, this.x - titleWidth / 2, this.y - (ts));
  }

  mouseClicked() {
    if (mouseX >= this.x - this.size / 2 && mouseX <= this.x + this.size / 2) {
      this.callback();
    }
  }
}

function preload() {
  start=loadSound("choose.mp3");
  am9_34= loadSound("9_34am.mp3");
  pm2_10= loadSound("2_10pm.mp3");
  pm4_27= loadSound("4_27pm.mp3");
  pm7_56= loadSound("7_56pm.mp3");
  pm10_19= loadSound("10_19pm.mp3");

  image_siwa_gray = loadImage("siwa_gray.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  start.play();
  imageMode(CENTER);
  image(image_siwa_gray, windowWidth-height/4*3.5, windowHeight/4,  height/8*3.5, height/8);

  textFont('KoPub Batang');
  buttons[0] = new Button(width/6, height/1.5, "오전", "아홉시 삼십사분", () => {
    am9_34.play();
  });
  buttons[1] = new Button((width/6) * 2, height/1.5, "오후", "두시 십분", () => {pm2_10.play()});
  buttons[2] = new Button((width/6) * 3, height/1.5, "오후", "네시 이십칠분", () => {pm4_27.play()});
  buttons[3] = new Button((width/6) * 4, height/1.5, "오후", "일곱시 오십육분", () => {pm7_56.play()});
  buttons[4] = new Button((width/6) * 5, height/1.5, "오후", "열시 십구분", () => {pm10_19.play()});
}


function draw() {
  background(0);
  image(image_siwa_gray, windowWidth/2, windowHeight/7,  height/8*3.5, height/8);
  fill(255,255,0);
  ellipse(mouseX, height/1.5, width/6, height);
  for (var button of buttons) {
    button.draw();
  }
}

function mouseClicked() {
  for (var button of buttons) {
    button.mouseClicked();
  }
}
