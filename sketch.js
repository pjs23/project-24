const Engine=Matter.engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,Stone, Iron,Rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    
    
    Stone = new Stone(700,320,100,100);
    Iron = new Iron(300,350);
    Rubber=new Rubber(900,450,70);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Stone.display();
    Iron.display();
    Rubber.display();

    
 
}