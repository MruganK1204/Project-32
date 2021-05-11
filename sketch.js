const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;

var slingshot1;

var ball1;

var boxes1;

var ground1;
var stand1,stand2;

var score = 0

var backgroundImage;

var bg = "images/light.jpg"

function preload(){

  getBackGroundImage();
polygon = loadImage("polygon.jpg")


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

box1 = new Box(300,275,30,40)
box2 = new Box(330,275,30,40)
box3 = new Box(360,275,30,40)
box4 = new Box(390,275,30,40)
box5 = new Box(420,275,30,40)
box6 = new Box(450,275,30,40)
box7 = new Box(480,275,30,40)

box8 = new Box(330,235,30,40)
box9 = new Box(360,235,30,40)
box10 = new Box(390,235,30,40)
box11 = new Box(420,235,30,40)
box12 = new Box(450,235,30,40)

box13 = new Box(360,195,30,40)
box14 = new Box(390,195,30,40)
box15 = new Box(420,195,30,40)
box16 = new Box(390,155,30,40)

boxes1 = new Box(640,175,30,40)
boxes2 = new Box(670,175,30,40)
boxes3 = new Box(700,175,30,40)
boxes4 = new Box(730,175,30,40)
boxes5 = new Box(760,175,30,40)
boxes6 = new Box(670,135,30,40)
boxes7 = new Box(700,135,30,40)
boxes8 = new Box(730,135,30,40)
boxes9 = new Box(700,95,30,40)

ball1 = Bodies.circle(50,200,20)
World.add(world,ball1)

slingshot1 = new SlingShot(ball1,{x:100,y:200})

ground1 = new Ground(450,393,900,20)

stand1 = new Stand(390,300,250,10)
stand2 = new Stand(700,200,200,10)




}

function draw(){

  background("white")
    Engine.update(engine);

text("Score:"+ score,750,40)

  box1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

box13.display();
box14.display();
box15.display();
box16.display();


boxes1.display();
boxes2.display();
boxes3.display();
boxes4.display();
boxes5.display();
boxes6.display();
boxes7.display();
boxes8.display();
boxes9.display();

slingshot1.display();
imageMode(CENTER)
image(polygon,ball1.position.x,ball1.position.y,40,40)
ground1.display();

stand1.display();
stand2.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();


}


function mouseDragged(){
Matter.Body.setPosition(this.ball1,{x:mouseX,y:mouseY})

}

function mouseReleased(){
slingshot1.fly()



}
function keyPressed(){

if(keyCode === 32){

  slingshot1.attach(this.ball1)
}



}

async function getBackGroundImage(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJson = await response.json()
console.log(responseJson)
var dateTime = responseJson.datetime

var hour = dateTime.slice(11,13)

if(hour>=6 && hour<=18){

bg = "images/light.jpg"

}
else{

  bg = "images/dark.jpg"

}

backgroundImage = loadImage(bg)

}


