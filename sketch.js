var path,mainCyclist , Opponent , OppoImg
var pathImg,mainRacerImg1,mainRacerImg2;


var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  OppoImg = loadAnimation("images/opponent1.png","images/opponent2.png")
 bellRing = loadSound("sound/bell.mp3")
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
Opponent  = createSprite(70,150,20,20);
Opponent.addAnimation("AdvaitRunning",OppoImg);
Opponent.scale=0.07;
Opponent.velocityX = 2
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    distance = distance+round(getFrameRate()/60)
  
    bellRing.play();
 }
}