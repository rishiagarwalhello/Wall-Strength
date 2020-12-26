var wall, thickness; //Wall
var bullet, speed, weight; //Bullet
var damage; //Damage

function setup() {
  createCanvas(1350,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet=createSprite(50,200,50,5);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background("black");
  
  if(bullet.x+bullet.width>=wall.x-wall.width)
  {
    bullet.velocityX=0;

    if(damage>10)
    {
      wall.shapeColor="red";
    }
    else
    {
      wall.shapeColor="green";
    }
  }

  drawSprites();
}