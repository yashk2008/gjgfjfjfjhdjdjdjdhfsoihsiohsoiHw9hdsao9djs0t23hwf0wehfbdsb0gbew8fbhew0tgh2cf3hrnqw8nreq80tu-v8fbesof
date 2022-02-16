
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball2
var ball3
var ball4
var ball5 
var ball7 
var ball6
var ball8
var ball9
var ball10
let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball2_options = {
    restitution: 1,
    frictionAir:0.0
  }
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(600,780,1200,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball2 = Bodies.circle(100,10,20,ball2_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(30,2,20,ball2_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(40,4,20,ball2_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(50,6,20,ball2_options);
  World.add(world,ball5);
  ball6 = Bodies.circle(100,8,20,ball2_options);
  World.add(world,ball6);
  
  
  ball2 = Bodies.circle(100,10,20,ball2_options);
  World.add(world,ball2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20)
  ellipse(ball2.position.x,ball2.position.y,20);

  ellipse(ball3.position.x,ball3.position.y,20);

  ellipse(ball4.position.x,ball4.position.y,20);

  ellipse(ball5.position.x,ball5.position.y,20);


    ellipse(ball6.position.x,ball6.position.y,20);
    
  rect(ground.position.x,ground.position.y,1200,20);
 
}

