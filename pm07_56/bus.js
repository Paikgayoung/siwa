var x=[];
var i;
var N = 1;

var INCREMENT = 10;
let BUS1 = 10;
let BUS2 = 6;
let BUS3 = 2;
let TREE = 10;

var bus_sound ;
var bus_back ;
var bus_card ;

var bus_card_pressed = false;

function preload() {
  bus_sound = loadSound("bus.mp3");
  bus_back = loadSound("bus_back.mp3");
  bus_card = loadSound("bus_card.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bus_sound.play();
  bus_back.play();
  bus_sound.setVolume(1);
  bus_back.setVolume(0.2);
  bus_card.setVolume(0.01);

  for (var i=0; i<N; i++) {
    x[i]=random(width/1.5, width/2.5);
  }
}


function draw() {
  background(0);
  if (keyIsPressed) {
    if (INCREMENT >= 0) {
      INCREMENT -= 0.05;
    }
  }
  bus1();
  bus2();
  bus3();
  tree();
}

function keyPressed() {
  if (!bus_card_pressed){
    bus_card.play();
    bus_card_pressed = true;
  }
}


function bus1() {
  fill(255, 255, 0);
  noStroke();
  for (var i=0; i<N; i++) {
    rect(x[i], height-height/3, width/3, height/2.5);
    x[i]+=BUS1*INCREMENT;

    if (x[i] > width) x[i]=0 ;
  }
}

function bus2() {
  fill(255, 255, 0, 100);
  noStroke();
  for (var i=0; i<N; i++) {
    rect(x[i], height-height/5, width/2, height/2.5);
    x[i]+=BUS2*INCREMENT;

    if (x[i] > width) x[i]=0 ;
  }
}

function bus3() {
  fill(255, 255, 0, 150);
  noStroke();
  for (var i=0; i<N; i++) {
    rect(x[i], height-height/5, width/3, height/2.5);
    x[i]+=BUS3*INCREMENT;

    if (x[i] > width) x[i]=0 ;
  }
}

function tree() {
  fill(51, 255, 51);
  noStroke();
  for (var i=0; i<N; i++) {
    ellipse(x[i], height-height/1.2, width/3, height/2.5);
    ellipse(x[i]-width/11, height-height/1.5, width/5, height/3.5);
    ellipse(x[i]+width/11, height-height/1.5, width/5, height/3.5);
    fill(153, 102, 51);
    rect(x[i], height-height/1.4, width/25, height);
    x[i]+=TREE*INCREMENT;

    if (x[i] > width) x[i]=0 ;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
