const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg, superHero, monster;
var ground, ground2, fly;

var block1;

function preload() {
bg = loadImage("bg.png");
}

function setup() {
  createCanvas(1000, 500);
  
  engine = Engine.create();
  world = engine.world;

  superHero = new Hero(320, 100, 350, 150);
  fly= new Fly(superHero.body, {x:200,y:150});
  ground = new Ground(100, 330, 1200, 20);
  
  monster = new Monster(800, 100, 170, 170);
  ground2 = new Ground(800, 300, 250, 20);

  block1 = new Block(650, 325, 40, 40);
  block2 = new Block(650, 320, 40, 40);
  block3 = new Block(650, 315, 40, 40);
  block10 = new Block(650, 305, 40, 40);

 
  block4 = new Block(600, 320, 40, 40);
  block5 = new Block(600, 315, 40, 40);
  block6 = new Block(600, 310, 40, 40);
  block7 = new Block(600, 305, 40, 40);
  block8 = new Block(600, 300, 40, 40);
  block9 = new Block(600, 295, 40, 40);
  
  block11 = new Block(550, 320, 40, 40);
  block12 = new Block(550, 315, 40, 40);
  block13 = new Block(550, 310, 40, 40);
  block14 = new Block(550, 305, 40, 40);
  block15 = new Block(550, 300, 40, 40);

  block16 = new Block(500, 320, 40, 40);
  block17 = new Block(500, 315, 40, 40);
  block18 = new Block(500, 310, 40, 40);
  block19 = new Block(500, 305, 40, 40);
  block20 = new Block(500, 300, 40, 40);
  block21 = new Block(500, 295, 40, 40);

}

function draw() {
  background(bg);
  Engine.update(engine);

  superHero.display();
  monster.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block10.display();


  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();


}

function mouseDragged(){
  Matter.Body.setPosition(superHero.body, {x:mouseX, y:mouseY})
  }