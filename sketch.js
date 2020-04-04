const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drop1 = [];

function setup() {

  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
  for(var i = 0; i < 5000; i = i + 10){
  drop1[i] = new Drop();
  }  
}

function draw() {
  background("white");  

  Engine.update(engine);

  for(var i = 0; i < 5000; i = i + 10){
    drop1[i].display();
  } 

  }
