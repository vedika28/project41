class Umbrella {

    constructor() {

        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(width / 2, 450, 170, options);
        World.add(world, this.body);
        this.image = loadImage("images/girl_umbrella.png");
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 400, 400);
    }
}