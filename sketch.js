const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;

var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //ground
  ground = new Ground();
 
 //stand
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,230,10);

  // ball
  ball = Bodies.circle(50,200,20)
  World.add(world,ball);

  //sling
  sling = new Sling (this.ball,{x:100,y:200});
 


  // STAND 1
  //level one
  block1 = new Block(300,275,30,40);
 
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //STAND 2
  //level1
  block111 = new Block(700,175,30,40)
  block22 = new Block(710,175,30,40)
  block33 = new Block(720,175,30,40)
  block44 = new Block(730,175,30,40)
  block66 = new Block(690,175,30,40)
  block77 = new Block(680,175,30,40)
 
//level2
block88 = new Block(685,140,30,40);
block99 = new Block(700,140,30,40);
block1111= new Block(710,140,30,40);
block222 = new Block(720,140,30,40);
block333= new Block(725,140,30,40);

//level3
  block444 = new Block(695,115,30,40)
  block555 = new Block(705,115,30,40)
  block666 = new Block(715,115,30,40)
  block777 = new Block(725,115,30,40)
  
  //level4
  block888 = new Block(707,80,30,40)
  block999 = new Block(710,80,30,40)

  //level5

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  imageMode(CENTER);
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
 sling.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill("yellow")
  block111.display();
  block22.display();
  block33.display();
  block44.display();
  block66.display();
  block77.display();

  fill("green")
  block88.display();
  block99.display();
  block1111.display();
  block222.display();
  block333.display();
 
  fill("pink")
  block444.display();
  block555.display();
  block666.display();
  block777.display();

  fill("red")
  block888.display();
  block999.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}