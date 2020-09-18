function setup() {
  createCanvas(displayWidth,displayHeight);
  background(random(255),random(255),random(255));
}
function mousePressed() {
  if (mouseX > 0 && mouseX < displayWidth && mouseY > 0 && mouseY < displayHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}