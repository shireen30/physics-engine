const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var object;


function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;

var object_options={isStatic:true}

  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(myworld,object);

console.log(object.position.y)
  
}

function draw() {
  background(0);  
  Engine.update(myengine);
  rect(object.position.x,object.position.y,50,50);
  
 
}