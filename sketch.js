
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bin1,bin2,bin3,garbage;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	bin1=new Bin(810,260,100,PI/2);
	bin2=new Bin(810,180,100,PI/2);
	bin3=new Bin(760,120,150,PI/7);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  Engine.update(engine);

  rectMode(CENTER)
 
  bin1.display();
  bin2.display();
  bin3.display();

 

  drawSprites();
 

}

function keyPressed() {
	if (keyCode===UP_ARROW) {
	 

	   Matter.Body.setStatic(garbageBody,false)
	 }
   }

