let curls = 26;
let afroSize = 225;
let hairHeight = 240;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background('#28661dff');

// XY Mouse Tool
  console.log("x", mouseX, "y", mouseY);
  



// HAIR - SILK PRESS
  fill("black");
  noStroke();
  rect(140,250,220,hairHeight,5);
  //triangle(250,200, 85, 445,415,445)
  
// HAIR - AFRO
  fill("#000000");
  circle(250,250,afroSize);
  
// FACE
  fill("#361201ff");
  noStroke();
  ellipse(250,310,195,280);
  
  
// EYEBROWS
  noFill();
  stroke("black");
  strokeWeight(3);
  arc(205,320,50,40,190,345);
  arc(300,320,50,40,190,345);
  
// EARS?

// NOSE
  arc(250,380,25,10,0,180);
  arc(260,377,15,10,315,135);
  arc(240,377,15,10,45,215);
  
// LIPS
  fill('#2E0105');
  noStroke();
  arc(242,410,40,20,180,0);
  arc(258,410,40,20,180,0);
  
  fill('#491702');
  noStroke();
  arc(250,410,55,20,0,180);
  
// DIMPLES?
  noFill();
  stroke("#200a018c");
  strokeWeight(4);
  arc(195,380,10,16,270,45);
  arc(310,380,10,16,135,270);
  
  // HAIRLINE
  fill("black")
  noStroke();
  //arc(250,255,220,170,160,0);
  rotate(40)
  ellipse(302,40,60,130)
  resetMatrix()
  rotate(-40)
  ellipse(80,360,60,130);
  resetMatrix();
  ellipse(250,190,60,40);


}

function mousePressed(){
  console.log("I pressed the mouse");
  curls = curls + 1;
  if(curls > 100){
    curls = 26;
  }
}