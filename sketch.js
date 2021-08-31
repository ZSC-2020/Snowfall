const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
var snow=[], maxS=30, snowbg;
var engine, world;

function preload(){
  snowbg=loadImage("snowbg.jpeg");

}
function setup() {
  createCanvas(1600,900);
  engine=Engine.create()
  world=engine.world;

   if(frameCount%150===0){
     for(var i=0; i<maxS; i++){
       snow.push(new Snow (random(0,1600),random(0,900),random(5,10)))
     }

   }
   Engine.run(engine)
}

function draw() {
  background(snowbg);  
  for(var i=0; i<maxS; i++){
    snow[i].display()
    snow[i].update()
  }
}