
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	 box1=new Box(600,500,200,100);
	 
	 ball1=new Ball(200,550,10);
	 ground=Bodies.rectangle(400,600,900,20,{isStatic:true})
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rect(ground.position.x,ground.position.y,900,20);
  box1.display();
 
  ball1.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.setStatic(ball1.body,false);
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:10,y:-10});
	}
}


