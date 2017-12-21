var latte_sound ;
var latte_back ;

let tideInterval = 1500;

var s_num = 25;
var myStars = [];

var press=true;

class myStar {
  constructor() {
    this.xpos = random(1, width);
    this.ypos = random(1, height);
    this.zpos = random(-200, 400);
    this.speed = random(10,13);
    this.w = random(200, 250);
  }

  display() {
    noStroke();
    var val=random(220,255);
    fill(255, 255, 0, val);
    push();
    translate(-width/2, -height/2, 0);
    translate(this.xpos, this.ypos, this.zpos);
    sphere(this.w/2);
    pop();
  }

  move() {
    this.zpos += this.speed;
    if (this.zpos > 1000) {
      this.zpos = -1000;
    }
  }

}

function preload() {
  latte_sound = loadSound("latte.mp3");
  latte_back = loadSound("latte_back.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  latte_sound.play();
  latte_back.play();
  latte_back.setVolume(0.14);

  for (var i = 0; i < s_num; i++) {
    myStars[i] = new myStar();
  }
}

function draw() {
  fill(255,255,0);
  background(0);

  if(press==true){
    let seaLevel = map(cos((millis() % tideInterval)/tideInterval * TWO_PI), -1, 1, height*0.1, height*0.9);
    translate(-width/2, -height/2,0);
    rect(0, seaLevel, width, height-seaLevel);
      if(keyIsPressed) press=false;

    } else {
      for (var i = 0; i < s_num; i++) {
        myStars[i].display();
        myStars[i].move();
      }
    }
  }
