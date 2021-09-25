class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    

    var options = {
      isStatic: false,
      restitution: 0.3
    }

    this.body = Bodies.circle(this.x, this.y, this.radius, options);

    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;

    push();
    rectMode(CENTER);
    stroke('yellow');
    fill(0);
    ellipse(pos.x, pos.y, this.radius);
    pop();
  }

  aForce() {
    var pos = this.body.position;

    Matter.Body.applyForce(this.body, pos, {x: 0.3, y: -0.25});
  }
}