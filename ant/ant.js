//var circle=[];
//var x=[];
//var y=[];
//var N=20;

//var ant_sound ;
//var ant_background ;

//function preload() {
//  ant_sound = loadSound("ant.mp3");
//  ant_background = loadSound("ant_background.mp3")
//}

//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  ant_sound.play();
//  ant_background.play();
//  ant_sound.setVolume(1);
//  ant_background.setVolume(1);

//  for (var i=0; i<N; i++) {
//    circle[i]=random(200,250);
//    x[i]=random(0, width);
//    y[i]=random(0, height);
//  }
//}

//function draw() {
//  background(0);
//  fill(255,255,0);
//  stroke(255,255,0);
//  strokeWeight(3);

//  for (var i=0; i<N; i++) {
//    ellipse(x[i], y[i], circle[i], circle[i]);
//    x[i]+=random(-30,30);
//  }
//}

var x=[];
var N=1;
var i;
var angle = 0;

//var y = 10;

var ant_sound ;
var ant_background ;

function preload() {
  ant_sound = loadSound("ant.mp3");
  ant_background = loadSound("ant_background.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ant_sound.play();
  ant_background.play();
  ant_sound.setVolume(1);
  ant_background.setVolume(1);

  for (var i=0; i<N; i++) {
    x[i]=random(width/1.5, width/2.5);
  }

  angleMode(DEGREES);
}

function draw() {
  background(0);
  ant();
  // leg();
}

function ant() {
  if ( keyIsPressed ) {
    //if(mouseIsPressed) {
    fill(255, 255, 0);
    noStroke();
    ellipse(mouseX, height/1.5, height/2, height/5);
    ellipse(mouseX, height/2, height/2, height/5);
    ellipse(mouseX, height-height/1.5, height/2, height/5);
  } else {
    for (var i=0; i<N; i++) {
      fill(255, 255, 0);
      noStroke();
      ellipse(x[i], height/1.5, height/2, height/5);
      ellipse(x[i], height/2, height/2, height/5);
      ellipse(x[i], height-height/1.5, height/2, height/5);

      // strokeWeight(10);
      // stroke(255,255,0);
      //line(x[i], height-height/1.5,x[i]+100, height/1.5);
      
      if (x[i]>width/1.5 | x[i]<width/10) x[i]=random(width/10, width/1.3);
      x[i]+=random(-70, 70);
    }
  }
}
