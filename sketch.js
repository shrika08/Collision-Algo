
var fr,mr;


function setup() {
  createCanvas(800,400);
   fr = createSprite(400, 200, 50, 50);
   fr.shapeColor="green"
   mr = createSprite(400, 300, 50, 50);
   mr.shapeColor ="blue"
}

function draw() {
  background(255,255,50);  
mr.x = mouseX;
mr.y = mouseY;

if(abs (mr.x-fr.x)<mr.width/2+fr.width/2 && abs (mr.y - fr.y)<mr.height/2+fr.height/2){

mr.shapeColor ="pink"
}
else {
mr.shapeColor = "blue"

}

  drawSprites();
}