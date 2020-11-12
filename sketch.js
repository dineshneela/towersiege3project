
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,ground1,ground2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11
var box12,box13,box14,box15,box16,box17
var ball,slingshot
var gameState = "onSling";
var score=0
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(400,390,800,10)
	ground1=new Ground(400,280,200,10)
	ground2=new Ground(680,120,200,10)
	box3=new Box(400,270,20,35)
	box4=new Box(420,270,20,35)
	box5=new Box(440,270,20,35)
	box2=new Box(380,270,20,35)
	box1=new Box(360,270,20,35)
	box7=new Box1(400,225,20,35)
	box6=new Box1(380,225,20,35)
	box8=new Box1(420,225,20,35)
	box9=new Box2(410,195,20,35)
	box10=new Box2(390,195,20,35)
	box11=new Box3(400,160,20,35)
	box13=new Box(680,110,20,20)
	box12=new Box(660,110,20,20)
	box14=new Box(700,110,20,20)
	box15=new Box1(670,90,20,20)
	box16=new Box1(690,90,20,20)
	box17=new Box2(680,70,20,20)
	ball=new polygon(150,170,30,30)
	 slingshot = new SlingShot(ball.body,{x:80, y:280});
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  textSize(40)
 fill("red")
 text("SCORE"+score,70,40)
 Engine.update(engine);
  ground.display();
  ground1.display();
 ground2.display();
 box3.display();
 box4.display();
 box5.display();
 box2.display();
 box1.display();
 box7.display();
 box6.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box13.display();
 box12.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 ball.display();
 slingshot.display();
 box3.Score();
 box4.Score();
 box5.Score();
 box2.Score();
 box1.Score();
 box6.Score();
 box7.Score();
 box8.Score();
 box9.Score();
 box10.Score();
 box11.Score();
 box12.Score();
 box13.Score();
 box14.Score();
 box15.Score();
 box16.Score();
 box17.Score();
 
}
function mouseDragged(){
	// if (gameState!=="launched"){
	 Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
	// }
 }
 
 
 function mouseReleased(){
	 slingshot.fly();
	 gameState = "launched";
 }
 
 function keyPressed(){
	 if(keyCode === 32){
		 ball.trajectory=[]
		 Matter.Body.setPosition(ball.body,{x:200,y:50})
		 slingshot.attach(ball.body);
	 }
 }


