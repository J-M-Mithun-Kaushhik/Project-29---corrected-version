const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,40);
    platform1 = new Ground(390,300,230,10);
    platform2 = new Ground(750,200,230,10);
    polygon = new Polygon(100,200,20);
    slingshot = new SlingShot(polygon.body,{x:100, y:200});

    //platform1 blocks
    //level one
    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    //top
    block16 = new Box(390,155,30,40);

    //platform2 blocks
    //level one
    block17 = new Box(660,175,30,40);
    block18 = new Box(690,175,30,40);
    block19 = new Box(720,175,30,40);
    block20 = new Box(750,175,30,40);
    block21 = new Box(780,175,30,40);
    block22 = new Box(810,175,30,40);
    block23 = new Box(840,175,30,40);
    //level two
    block24 = new Box(690,135,30,40);
    block25 = new Box(720,135,30,40);
    block26 = new Box(750,135,30,40);
    block27 = new Box(780,135,30,40);
    block28 = new Box(810,135,30,40);
    //level three
    block29 = new Box(720,95,30,40);
    block30 = new Box(750,95,30,40);
    block31 = new Box(780,95,30,40);
    //top
    block32 = new Box(750,55,30,40);
}

function draw(){
    background("white");
    Engine.update(engine);

    ground.display();
    platform1.display();
    platform2.display();

    slingshot.display(); 
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    polygon.display();
}
    

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}