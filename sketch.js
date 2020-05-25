var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12;
var r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24;

function setup() {
  createCanvas(800,600);

  r1 = createSprite(400, 550, 200, 50);
  r1.shapeColor = "red";
  
  r2 = createSprite(400, 500, 100, 50);
  r2.shapeColor = "darkblue";

  r3 = createSprite(400, 450, 50, 50);
  r3.shapeColor = "darkgreen";

  r4 = createSprite(400, 415, 5, 20);
  r4.shapeColor = "black";

  r5 = createSprite(320, 475, 40, 200);
  r5.shapeColor = "red";

  r6 = createSprite(480, 475, 40, 200);
  r6.shapeColor = "red";

  r7 = createSprite(260, 452, 40, 250);
  r7.shapeColor = "darkblue";

  r8 = createSprite(540, 452, 40, 250);  
  r8.shapeColor = "darkblue";

  r9 = createSprite(200, 412, 40, 330);
  r9.shapeColor = "red";

  r10 = createSprite(600, 412, 40, 330);
  r10.shapeColor = "red";

  r11 = createSprite(140, 372, 40, 410);
  r11.shapeColor = "darkgreen";

  r12 = createSprite(660, 372, 40, 410);
  r12.shapeColor = "darkgreen";

  r13 = createSprite(80, 322, 40, 510);
  r13.shapeColor = "red";

  r14 = createSprite(720, 322, 40, 510);
  r14.shapeColor = "red";

  r15 = createSprite(320, 365, 5, 20);
  r15.shapeColor = "black";

  r16 = createSprite(480, 365, 5, 20);
  r16.shapeColor = "black";

  r17 = createSprite(260, 318, 5, 20);
  r17.shapeColor = "black";

  r18 = createSprite(540, 318, 5, 20);
  r18.shapeColor = "black";

  r19 = createSprite(200, 238, 5, 20);
  r19.shapeColor = "black";

  r20 = createSprite(600, 238, 5, 20);
  r20.shapeColor = "black";

  r21 = createSprite(140, 158, 5, 20);
  r21.shapeColor = "black";

  r22 = createSprite(660, 158, 5, 20);
  r22.shapeColor = "black";

  r23 = createSprite(80, 58, 5, 20);
  r23.shapeColor = "black";

  r24 = createSprite(720, 58, 5, 20);
  r24.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  

  drawSprites();
}