const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var Sky;
var fireball,plane

function preload(){

  Sky = loadImage("pngtree-cloud-flat-background-cartoon-blue-sky-pattern-image_418492.jpg");
  plane = loadImage("1357d6e45cde55e.jpg");
  fireball= loadImage("102-1022270_fireball-best-clip-art-fireball.png")
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;



   
}

function draw(){

plane = new Plane(100,30)

 drawSprites()
}
