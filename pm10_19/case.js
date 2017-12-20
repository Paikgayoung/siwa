var fire_sound;
var fire_back;

var poem = '필통을 잃어버렸다. 빨간 필통 밑부분이 찢어져 노란색으로 바꾼지 얼마 되지 않은, 생각해보니 그 속 모든 것들이 거의 새것 같았던, 필통을 잃었다. 있을 것이라고 생각했던 곳에 어제 새벽에 한 번 오늘 10시를 기점으로 전에 한 번 후에 한 번. 한 번-한 번-한 번-이 모여 잃었다는 것이 확정되는 순간. 무엇이라도 기록하고싶어졌다. 보았을 때는 만져졌던 물건의 여생을 보이지 않는 지금 떠올려보며 마지막으로 쥐어보고 싶은. 그런 맘. 핫핑크색 펜과, 四色圆珠笔, 삼각지우개, 핑크색 화이트, 중학교 1학년 때부터 쓴 컴싸, 지워지는 노란 형광펜 7년 6년 1년 반년 반의 반년. 언젠가는 잊고 말았을 여생을 기억해보게 된 것만으로. 그것 만으로도. 어쩌면 강릉에 다녀온 내게도 산불이 왔다갔을지 모르겠다.';
var poemArray = poem.split(' ');

function preload() {
  fire_sound = loadSound("fire.mp3");
  fire_back = loadSound("fire_back.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,0);
  textFont('KoPub Batang');
  fire_sound.play();
  fire_back.play();
  frameRate(1);

}

function draw() {
  for (var i = 0 ; i < poemArray.length ; i++) {
    fill(0,random(100,255));
    textSize(random(height/19,height/16));
    text(poemArray[i], random(0,width), random(0,height));
  }
  if(keyIsPressed) {
    fill(255,255,0);
    rect(0,0,width,height);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
