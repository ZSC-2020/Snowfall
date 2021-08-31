class Snow {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          density: 0.1,
          restitution: 0.1,
  
      }
      this.body = Bodies.circle(x,y,r/2,options);
    this.r=r
      World.add(world, this.body);
    }

    update(){
      if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,1600),y:random(0,900)} )
      }
    }
    display(){
      push()
      var pos =this.body.position;
      translate(pos.x, pos.y )
      ellipseMode(CENTER);
      fill("white");
      noStroke();
      ellipse(0,0, this.r, this.r);
      pop()
    }

  };