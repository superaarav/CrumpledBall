const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(600, 650, 40, 10 , {isStatic:true} );
	 World.add(world, ground);
	 paper=new Paper(200,450,70);
	 dustbin=new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  
  background(255);

	Engine.update(engine);

	dustbin.display();
	paper.display();


  rectMode(CENTER);
  

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
	}
}


