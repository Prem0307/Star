var starImg, fairyImg;
var bg,bgImg;
var fairy ;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starnight.png");


}

function setup() {
	createCanvas(800, 750);

  // fairyVoice.play();
  
   
  bg = createSprite(400,300)
  bg.addImage(bgImg)
  bg.scale = 0.48;

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
  
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	

}


function draw() {

  
  Engine.update(engine)
 if(star.y > 472){
	 star.velocityY = 0;
 }
keyPressed();
  drawSprites();

}

function keyPressed() {
if(keyDown(RIGHT_ARROW)){
fairy.x = fairy.x+2.6;
}
if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x-2.6;
	}
if(keyDown(DOWN_ARROW)){
star.velocityY = 3;
}
}
