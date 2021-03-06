var max_rains = 9;
var rains = [];
var B_sound;
var B_background ;
var vol = 0.1;
var mode = 0;
var back = 0;
var fadeOutStart;

function preload() {
  B_sound = loadSound("B.mp3");
  B_background = loadSound("B_back.mp3");
}

function Rain(x, y, vx, vy, sz, len, c) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.sz = sz;
  this.len=len;
  this.c = c;

  this.move = function() {
    this.y += this.vy;
    if (this.y>windowHeight) this.y = 0;
  }

  this.render = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.sz, this.len);
  }
}

function keyPressed() {
  mode = 1;
  fadeOutStart = millis();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  B_sound.play();
  B_background.play();

  var i;
  for (i=0; i<max_rains; i++) {
    rains[i] = new Rain(
      random(0, windowWidth), random(height/2, height), random(0,width), random(40,60),
      random(width/35,width/34), random(height/2,height/1.2), color(255,255,0));
  }
}

function draw() {
  background(back,back,0);
  var i;
  for (i=0; i<max_rains; i++) {
    rains[i].move();
    rains[i].render();
  }

  if (mode == 1) {
    let ellapsedTime = millis() - fadeOutStart;
    if (ellapsedTime <= 3000) {
    //  B_background.setVolume(0.1,[1]);
      B_background.setVolume(0.1 - (0.1 * ellapsedTime/3000));
    }
    back+=10;
  }
}
