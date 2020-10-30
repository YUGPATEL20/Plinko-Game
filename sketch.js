var border1,border2,border3,border4;
var rect,rect1,rect2,rect3,rect4,rect5;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8;

function setup() {
  createCanvas(400,500);
 
  rect = createSprite(200, 493, 400, 7);
  rect.shapeColor = "white"
  rect1 = createSprite(1, 450, 20, 400);
  rect1.shapeColor = "white"
  rect2 = createSprite(400, 450, 20, 400);
  rect2.shapeColor = "white"
  rect3 = createSprite(100, 450, 5, 400);
  rect3.shapeColor = "white"
  rect4 = createSprite(200, 450, 5, 400);
  rect4.shapeColor = "white"
  rect5 = createSprite(300, 450, 5, 400);
  rect5.shapeColor = "white"

  border1 = createSprite(399, 200, 10, 600);
  border1.shapeColor = "brown"
  border2 = createSprite(1, 200, 10, 600);
  border2.shapeColor = "brown"
  border3 = createSprite(200, 1, 400, 10);
  border3.shapeColor = "brown"
  border4 = createSprite(200, 499, 400, 10);
  border4.shapeColor = "brown"

ball1 = createSprite(30,20,20,20)
ball1.shapeColor = "pink"

ball2 = createSprite(130,20,20,20)
ball2.shapeColor = "cyan"

ball3 = createSprite(230,20,20,20)
ball3.shapeColor = "purple"

ball4 = createSprite(330,20,20,20)
ball4.shapeColor = "orange"

ball5 = createSprite(60,50,20,20)
ball5.shapeColor = "blue"

ball6 = createSprite(160,50,20,20)
ball6.shapeColor = "red"

ball7 = createSprite(260,50,20,20)
ball7.shapeColor = "yellow"

ball8 = createSprite(360,50,20,20)
ball8.shapeColor = "green"

}

function draw() {
  ball1.velocityY = 2
  ball2.velocityY = 2
  ball3.velocityY = 2
  ball4.velocityY = 2
  ball5.velocityY = 3
  ball6.velocityY = 3
  ball7.velocityY = 3
  ball8.velocityY = 3

ball1.collide(rect,rect1,rect2,rect3,rect4,rect5,)
ball2.collide(rect,rect1,rect2,rect3,rect4,rect5)
ball3.collide(rect,rect1,rect2,rect3,rect4,rect5)
ball4.collide(rect,rect1,rect2,rect3,rect4,rect5)
ball5.collide(rect,rect1,rect2,rect3,rect4,rect5,ball1,ball2,ball3,ball4)
ball6.collide(rect,rect1,rect2,rect3,rect4,rect5,ball1,ball2,ball3,ball4)
ball7.collide(rect,rect1,rect2,rect3,rect4,rect5,ball1,ball2,ball3,ball4)
ball8.collide(rect,rect1,rect2,rect3,rect4,rect5,ball1,ball2,ball3,ball4)


  background("black");  
  drawSprites();
}