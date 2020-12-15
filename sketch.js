var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box1;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-55, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 console.log(packageBody);

	Engine.run(engine);

	box1=new Box(329,648,20,80);
	box2=new Box(450,648,200,20);
	box3=new Box(519,648,20,80);
}

function draw() {
  rectMode(CENTER);
  background(0)
  packageSprite.x=packageBody.position.x,400;
  packageSprite.y=packageBody.position.y,200;
  
  box1.display()
  box2.display()
  box3.display()

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
	Matter.Body.setStatic(packageBody,false); 
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 }
} 