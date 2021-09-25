
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;

var ball;

var bottom;
var left;
var right;


function preload() {

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottom = new Ground(width / 2, height - 10, width, 20);
	left = new Ground(width * (7/12), height - 70, 20, width / 4);
	right = new Ground(width * (7/12) + (width * (7/12)) / 2, height - 70, 20 , width / 4);

	ball = new Ball(width / 4, -20, 40);



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();

	bottom.show();
	right.show();
	left.show();

	ball.show();

	if (frameCount % 360 == 0) {
		ball = new Ball(width / 4, -20, 40);
	}
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    ball.aForce();
  }
}

/*function hForce() {
  //Body.applyForce(ball.Body, {x: ball.Body.x - 10, y: ball.Body.y}, {x: 0.05, y: -0.01});
	//Body.applyForce(ball.Body, {x: 0, y: 0}, {x: 0.05, y: -0.01});
	Matter.Body.applyForce(ball.body, ball.body.position, {x: 0.05, y: -0.01});
} */
