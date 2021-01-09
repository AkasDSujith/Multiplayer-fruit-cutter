const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var img ;
var gameState = 0;
var form ,player ;
var playerCount;
var flag = 0;
var fruit,fruitimg1,fruitimg2,fruitimg3,fruitimg4,fruitimg5;
var prob = 0;


function preload(){
img = loadImage("images/img.png");
imge = loadImage("images/imge.png");
fruitimg1 = loadImage("images/fruit1.png"); 
fruitimg2 = loadImage("images/fruit2.png");
fruitimg3 = loadImage("images/fruit3.png");
fruitimg4 = loadImage("images/fruit4.png");
fruitimg5 = loadImage("images/fruit5.png");
}


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  engine = Engine.create();
  world = engine.world;
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
 
  
   if(playerCount === 2){
    game.update(1);
  }
   if(gameState === 1){
      flag = 1;
      spawnFruits();
     game.play();
   }
   if (flag === 0){
    background(img); 
  }
   
  
   
  drawSprites();
}

function spawnFruits(){
  if(frameCount % 100 === 0){
    fruit = createSprite(20,690,20,20);
    fruit.x=Math.round(random(0,1200));
    fruit.velocityY = -5;
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1 : fruit.addImage(fruitimg1);
      break ;
      case 2 : fruit.addImage(fruitimg2);
      break ;
      case 3 : fruit.addImage(fruitimg4);
      break ;
      case 4 : fruit.addImage(fruitimg5);
      break ;
      default : break;  
    }
    fruit.scale=0.2;
  }
  
}