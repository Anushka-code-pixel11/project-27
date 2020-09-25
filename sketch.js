
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	pendulum1 = new Bob(340, 450);
	pendulum2 = new Bob(400, 450);
	pendulum3 = new Bob(460, 450);
	pendulum4 = new Bob(520, 450);
	pendulum5 = new Bob(580, 450);
  
	sling1 = new Rope(pendulum1.body, { x: 260, y: 170 });
	sling2 = new Rope(pendulum2.body, { x: 320, y: 170 });
	sling3 = new Rope(pendulum3.body, { x: 380, y: 170 });
	sling4 = new Rope(pendulum4.body, { x: 440, y: 170 });
	sling5 = new Rope(pendulum5.body, { x: 500, y: 170 });


	roof = new Roof();
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  roof.display();
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(pendulum1.body, { x: 85, y: -85 });
	}
  }


