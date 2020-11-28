class Paper {
    constructor(x, y) {
      var options = {
          isStatic :false,
          'restitution':0,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      fill("purple");
      
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);
      
    }
  };
  