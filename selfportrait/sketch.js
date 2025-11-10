// self portrait i made of myself using code :)
// this drawing was inspired by the self portrait of TIIFM - thank you for sharing your work

let name = "JAZ"

let hair = 225;
let hairLength = 240
let hairColor = "#2B0F06";
let skinColor = "#361201ff";
let faceColor = "#441702";
let dimples = "#200a018c";
let shirtColor = "#44094E";
let upperLip = "#1F0A01"
let btmLip = "#2E0105"
function setup() {
  cnv = createCanvas(500, 500);
  rectMode(CENTER);
  angleMode(DEGREES);

}

function draw() {
  
  // BACKGROUND
  background("#1AFA28");
      // Patterns using for loop
    for (j = 0; j <= height; j += 15) {     //  down
       for (i = 0; i <= width; i += 15) {   //  right
            stroke("#2DCC37");
            strokeWeight(2);
           ellipse(10+i,10+j, 10,10)
       }
    }
  
    
    fill("#CFA31E");
    noStroke();
    ellipse(500/2, 230, 350, 350);
  
  
  // HAIR STYLE
    // hairline
    fill(hairColor);
    rect(250, 190, 180, 190, 300);
    rect(250,275,170,hairLength)
  
  // HOODIE
    fill(shirtColor);
    ellipse(250, 340, 150, 100);
    fill(shirtColor);
    ellipse(250, 520, 370, 360);
  
  // NECK
    fill(skinColor);
    rect(250, 280, 100, 240, 90);
  
  // EARS
    fill(skinColor);
    rect(250, 245, 180, 60, 70);
  
  // FACE
    fill(faceColor);
    rect(250, 220, 162, 180, 100);
     beginShape();
    vertex(170, 230); // 1
    vertex(330, 230); // 2
    vertex(305, 310); // 3
    vertex(260, 345); // 4
    vertex(240, 345); // 5
    vertex(190, 310); // 6
    endShape();
  
  
  // EYEBROWS
  
  // GLASSES
    stroke(0);
    strokeWeight(5);
    line(240, 225, 260, 225);
    fill(255, 255, 255, 25);
    rect(210,220,60,40)
    rect(290,220,60,40)

  // NOSE
  
  // LIPS
  fill(btmLip);
  noStroke();
  arc(250,300,69,30,0,180);
  //ellipse(250,300,69,30)
  
  fill("");
  stroke("black");
  strokeWeight(2);
  //rect(250,300,40,10);
  //arc(250,300,40,10,0,180);

  
  fill(upperLip);
  noStroke();
  arc(242,300,50,20,180,0);
  arc(258,300,50,20,180,0);
  
  
  // DIMPLES
    noFill();
    stroke("#200a018c");
    strokeWeight(4);
    arc(205,289,10,16,270,45);
    arc(300,289,10,16,135,270);
  
}
  // SAVE PNG
  function keyTyped(){
    if (key === 's'){
      saveCanvas('pxp','png')
      console.log("saving file")

    }
  }
