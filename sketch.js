
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1,d2,d3;
var ground,paper;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


    ground = new Ground(800,690,1600,30);
	paper = new Paper(100,360,25);

    d1 = new Dustbin(1300,665,170,20);
	d2 = new Dustbin(1205,615,20,120);
	d3 = new Dustbin(1395,615,20,120);

	Engine.run(engine);
  
}

function draw() {
  
  background("white");
  
  d1.display();
  d2.display();
  d3.display();
  ground.display();
  paper.display();
  
}

function keyPressed(){
 if(keyCode === UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

 }

}

