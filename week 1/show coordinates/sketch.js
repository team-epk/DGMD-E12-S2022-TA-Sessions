function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(255);
  // shows x and y coordinates in upper left corner of canvas
  text("X: "+mouseX, 20, 30); 
  text("Y: "+mouseY, 20, 50);
  
  // if you prefer, you can have it show up in the console log
  // using mouseIsPressed lets you click a spot to get the coordinates
  
  // if (mouseIsPressed){
  // console.log("X: "+mouseX);
  // console.log("Y: "+mouseY);
  // }

}