let curls = 26;
let afroSize = 380;
let hairHeight = 160;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background('#28661dff');

// XY Mouse Tool
  //console.log("x", mouseX, "y", mouseY);
  
// HAIR - AFRO CURLS
//   fill("#000000");
//   noStroke();
//   circle(203,74,curls);
//   circle(177,77,curls);
//   circle(130,107,curls);
//   circle(111,123,curls);
//   circle(95,142,curls);
//   circle(78,332,curls);
//   circle(64,275,curls);
//   circle(100,370,curls);
//   circle(76, 179, curls);
//   circle(59,235,curls);
//   circle(114,386, curls);
//   circle(145, 84, curls);
//   circle(78,155,curls);
//   circle(62,204, curls);
//   circle(61, 217,curls);
//   circle(64,203,curls);
//   circle(65,303,curls);
//   circle(88,351,curls);
//   circle(59,254,curls);
//   circle(184,426,curls);
//   circle(164,418,curls);
//   circle(121,402,curls);
//   circle(140,406,curls);
//   circle(69,317,curls);
  
  
//   circle(158,79,curls);
//   circle(189,64,curls);
//   circle(211,55,curls);
//   circle(239,59,curls);
//   circle(249,55,curls);



//   // RIGHT SIDE
//   circle(251,55,curls);
//   circle(275,55,curls);
//   circle(300,65,curls);
//   circle(320,70,curls);
//   circle(340,82,curls);
//   circle(360, 95, curls)
//   circle(380,95,curls);
//   circle(400,203,curls);
//   circle(420,203,curls);
//   circle(440,203,curls);
//   circle(319,418,curls);
//   circle(346,411,curls);
//   circle(371,393,curls);
//   circle(388,375,curls);
//   circle(407,355,curls);
//   circle(419,330,curls);
//   circle(429,306,curls);
//   circle(439,280,curls);
//   circle(439,234,curls);
//   circle(437,255,curls);
//   circle(384,115,curls);
//   circle(405,140,curls);
//   circle(420,165,curls);
//   circle(427,179,curls);
//   circle(394,116,curls);
//   circle(433,216,curls);
//   circle(308,428,curls);


// HAIR - SILK PRESS
  fill("black");
  noStroke();
  rect(140,250,220,hairHeight,5);
  
  hairHeight = hairHeight + .5
  
  if (hairHeight > 300){
    hairHeight = 160
  }


// HAIR - AFRO
  fill("#000000");
  noStroke();
  circle(250,250,afroSize);
  
  afroSize = afroSize - 1;
  if (afroSize < 220 ){
    afroSize = 400;
  }
  
// FACE
  fill("#692303");
  noStroke();
  ellipse(250,310,195,280);
  
// HAIRLINE
  fill("black")
  arc(250,255,220,170,160,0);
  
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
  stroke("#501A028C");
  strokeWeight(4);
  arc(195,380,10,16,270,45);
  arc(310,380,10,16,135,270);
}

function mousePressed(){
  console.log("I pressed the mouse");
  curls = curls + 1;
  if(curls > 100){
    curls = 26;
  }
}