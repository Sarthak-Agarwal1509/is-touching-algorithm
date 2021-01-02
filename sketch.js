var movingRect,fixedRect



function setup() {
  createCanvas(800,400);
  movingRect=createSprite(50, 50, 70, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  
  fixedRect = createSprite(400,200,60,40)
  fixedRect.shapeColor = "green";
  fixedRect.debug = true
}

function draw() {
  background(0); 

movingRect.x = mouseX;
movingRect.y = mouseY;

if( movingRect.width/2+fixedRect.width/2 > movingRect.x-fixedRect.x && 
  movingRect.width/2+fixedRect.width/2 > fixedRect.x-movingRect.x&&
  movingRect.height/2+fixedRect.height/2>fixedRect.y-movingRect.y&& 
  movingRect.height/2+fixedRect.height/2>movingRect.y-fixedRect.y
  ){
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
  
  drawSprites();
}