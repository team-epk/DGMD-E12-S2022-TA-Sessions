//sets font size
// let font,
//     fontsize=40;
let x, y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  background(117, 233, 255);
}

function draw() {
  //start portrait
  push();  
  //hair
  noStroke()
  fill(187, 109, 62);
  arc(300, 110, 220, 110, 0, PI, CHORD);
  arc(300, 120, 250, 110, 0, PI, CHORD);
  arc(300, 130, 260, 110, 0, PI, CHORD);
  arc(300, 130, 270, 110, 0, PI, CHORD);
  arc(300, 140, 280, 110, 0, PI, CHORD);
  arc(300, 150, 290, 110, 0, PI, CHORD);
  arc(300, 170, 300, 110, 0, PI, CHORD);
  arc(300, 185, 300, 110, 0, PI, CHORD);
  arc(300, 200, 320, 110, 0, PI, CHORD);
  arc(300, 220, 330, 110, 0, PI, CHORD);
  triangle(200, 110, 220, 80, 300, 130);
  triangle(230, 130, 250, 80, 300, 110);
  triangle(250, 130, 270, 80, 310, 110);
  triangle(290, 110, 300, 60, 320, 110);
  triangle(300, 110, 340, 60, 340, 110);
  triangle(330, 110, 340, 60, 360, 110);
  triangle(350, 150, 370, 80, 400, 150);
  triangle(340, 150, 360, 80, 370, 150);


  //mah torso
  noStroke();
  fill(53, 82, 88);
  ellipse(400, 600, 500);

  // left ear - code borrowed from Ishaq with many thanks!
  strokeWeight(5);
  stroke(0, 0, 0)
  fill(255, 255, 255);
  ellipse(160, 275, 38, 54);

  //left hearing aid
  fill(255, 180, 100);
  ellipse(160, 275, 30);

  //head
  fill(255, 255, 255);
  noStroke();
  ellipse(300, 275, 300, 350);

  //honker
  strokeWeight(5);
  stroke(51);
  line(290, 270, 270, 340);
  line(270, 340, 300, 340);

  //mouth
  noFill();
  strokeWeight(5);
  stroke(51);
  arc(275, 350, 100, 100, QUARTER_PI, HALF_PI);

  //glasses left
  strokeWeight(10);
  stroke(51);
  circle(225, 275, 100);

  //glasses right
  strokeWeight(10);
  stroke(51);
  circle(350, 275, 100);

  //glasses nose piece
  strokeWeight(10);
  line(275, 275, 300, 275);

  //eyeball right
  strokeWeight(5);
  fill(165, 42, 42);
  ellipse(350, 275, 40, 100);

  //iris right
  noFill();
  strokeWeight(5);
  ellipse(350, 275, 5, 75);

  //eyeball left
  strokeWeight(5);
  fill(165, 42, 42);
  ellipse(225, 275, 40, 100);

  //iris left
  noFill();
  strokeWeight(5);
  ellipse(225, 275, 5, 75);

  // right ear - code borrowed from Ishaq with many thanks!
  fill(255, 255, 255);
  arc(450, 275, 38, 54, PI + QUARTER_PI, PI - QUARTER_PI);
  arc(450, 275, 18, 34, PI + QUARTER_PI, PI - QUARTER_PI);

  //right hearing aid
  fill(255, 180, 100);
  ellipse(450, 275, 15);
  //getting fancy with the wire and everything
  noFill();
  arc(460, 265, 20, 25, PI, TWO_PI);

  //right glasses earpiece
  strokeWeight(10);
  line(400, 275, 445, 240);

  //left glasses earpiece
  strokeWeight(10);
  line(155, 240, 175, 280);
  
  pop();

}