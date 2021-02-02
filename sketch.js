const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2;



function setup() {
	var canvas = createCanvas(400, 400);
    engine = Engine.create();
	world = engine.world;

	box1 = new Box (200,200,30,40);
	box2 = new Box (100,200,30,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(box1.body.position.x);
  console.log(box1.body.position.y);
  console.log(box1.body.angle);
 
 box1.display ();
 box2.display ();

}



