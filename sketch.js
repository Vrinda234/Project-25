var box1, box2, box3, paperObject, groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	//box1 = createSprite()

	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	
	
	 paper1 = new paper(200,450,40)
    
    box1 = new box(620,height-140,150,200)
    //box1.addImage(dustBinImg)
	//box2 = new box(540,height-73,23,70)

	//box3 = new box(700,height-73,23,70)

	gr = new ground(width/2,670,width,20)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");
  gr.display();
  box1.display();
  //box2.display();
  //box3.display();
  paper1.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85});
 }
}

