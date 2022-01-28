function setup() {
  createCanvas(400, 400);

  // things in setup only run one time
  // that means if you put backround here, it only gets drawn once
  background(244, 248, 252);
}

function draw() {
  // runs at 60 frames a second unless told otherwise
  // also keeps running until stopped

  // if you call the background here, it gets redrawn every frame 
  // this erases anything in the previous frames

  // background(244, 248, 252);
  
  // Move the mouse across the canvas and see what happens depending on where you declared your background color.
  circle(mouseX, mouseY, 75);
}