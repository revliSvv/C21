class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    

    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0,
      density: 1.2
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
}