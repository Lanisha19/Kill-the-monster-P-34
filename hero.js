class Hero {
    constructor(x, y, width, height){
    var option = {
        density:1,
        friction:1,
        isStatic:false
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, option);
    this.image = loadImage("superHero.png");
    World.add(world, this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}