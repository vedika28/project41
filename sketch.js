
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop = [];
var girl_umbrella;
var lightning;
var lightning1Img, lightning2Img;

function preload() {
    lightning1Img = loadImage("images/lightning.png");
    lightning2Img = loadImage("images/lightning2.png");
}

function setup() {
    createCanvas(500, 620);

    engine = Engine.create();
    world = engine.world;

    //drop=new Drop();

    for (var i = 0; i < 70; i++) {
        drop.push(new Drop(random(0, 500), random(-10, 100)));
    }

    makeLightning();
    girl_umbrella = new Umbrella();
}

function draw() {
    background(0);
    Engine.update(engine);

    girl_umbrella.display();

    for (var i = 0; i < 70; i++) {
        drop[i].display();
        drop[i].update();
    }


    if (frameCount % 100 == 0) {
        drawSprites();
    }
}

function makeLightning() {
    if (frameCount % 100 === 0) {
        lightning = createSprite(width / 2, 100, 10, 10);
        var rand = Math.round(random(1, 2));
        switch (rand) {
            case 1: lightning.addImage(lightning1Img);
                break;
            case 2: lightning.addImage(lightning2Img);
                break;
            default: break;
        }
        
    }
}

