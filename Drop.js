class Drop {

    constructor(x, y) {

        var options = {
            isStatic: false
        }

        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
        this.image = loadImage("images/drop.png");
        World.add(world, this.body);
        this.x = x;
        this.y = y;
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 10, 10)
    }

    update() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) })
        }
    }
}