var mrect,frect;

function setup() {
  createCanvas(800,400);
  mrect= createSprite(500, 100, 70, 70);
  mrect.shapeColor="blue";
  
  frect=createSprite(170,100,80,60);
  frect.shapeColor='yellow';

  mrect.velocityX=-4;
  frect.velocityX=4;
}

function draw() {
  background("black");  
  

  if (mrect.x-frect.x<=mrect.width/2+frect.width/2 &&
    frect.x-mrect.x<=mrect.width/2+frect.width/2 ){
    frect.shapeColor="red";
    mrect.shapeColor="green";

    frect.velocityX=frect.velocityX*(-1);
    mrect.velcoityX=mrect.velocityX*(-1);
    }
     

    if(mrect.y-frect.y<=mrect.height/2+frect.height/2 &&
    frect.y-mrect.y<=mrect.height/2+frect.height/2 ){
      frect.velocityY=frect.velocityY*(-1);
      mrect.velcoityY=mrect.velocityY*(-1);
    }





  drawSprites();
}
