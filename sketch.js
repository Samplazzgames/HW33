var image1

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function preload(){
  image1 = loadImage('snow1.png');
}

function draw() {
  background(255,255,255);  
  drawSprites();
  image1.addImage()
}