const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var bob, ground, ball;

function setup(){
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  bob = Bodies.rectangle(120, 50, 30, 40, options);
  World.add(world, bob);

  var options2 = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 390, 200, 20, options2);
  World.add(world, ground);

  var options3 = {
    restitution: 1.0
  }
  ball = Bodies.circle(300, 20, 20, options3);
  World.add(world, ball);

  console.log(bob.position.x);
  console.log(bob.position.y);

}

function draw(){
  background("grey");
  Engine.update(engine);

  rectMode(CENTER);
  rect(bob.position.x, bob.position.y, 50, 50);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30);

}