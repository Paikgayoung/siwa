var explain_sound;
var letter= '诗와 时와 视는\n보는 시집입니다\n\n시집의 밝기를 가장 높여주세요\n시를 응시하다가 키보드를 눌러보세요\n날이 개거나, 개미가 멈추거나\n달이 쏟아지거나, 버스에서 내리거나,\n물건을 잃습니다\n\n그리고,\n가장 가까이 다가와 주세요\n눈을 감고 빛을 응시해주세요';

function preload() {
  explain_sound = loadSound("explain.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  explain_sound.play();
  explain_sound.onended( () => {
    window.location.href = "../4.%20contents/index.html";
  });
  textFont('KoPub Batang');
  textSize(height/30);
  textAlign(CENTER);
  text(letter, width/2, height/4);
  fill(255);
}
