class Block{
    constructor(x, y, width, height){
      var option ={
          restitution : 0.8,
          friction : 1.0,
          density : 20
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, option);
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}