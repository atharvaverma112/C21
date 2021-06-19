var square1;
var square2;
var c,d,e;


function setup() {
  createCanvas(800,400);
 square1 = createSprite(400, 200, 50, 50);
 square2 = createSprite(200, 300, 30, 60);
 square1.shapeColor  ="green";
 square2.shapeColor ="green";

 c = createSprite(300, 200, 50, 50);
 c.shapeColor  ="green";
 d = createSprite(150, 150, 50, 50);
 d.shapeColor  ="green";
 e = createSprite(250, 100, 50, 50);
 e.shapeColor  ="green";



}

function draw() {
  background(255,255,255);

  square2.x = World.mouseX;
  square2.y = World.mouseY;

  console.log(square2.x-square1.x);
  if (isTouching(square2,d)){
    square2.shapeColor  ="red";
    d.shapeColor ="red";
  }
else{
  square2.shapeColor  ="green";
  d.shapeColor ="green";
}
  drawSprites();
}

 








