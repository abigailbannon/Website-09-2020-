let value = 0;
function setup(){
  createCanvas(displayWidth,displayHeight);
  background(random(10),random(10),random(10));
}

function draw()
  {
    //opacity(50);
    fill(value, value, value, 50);
 //fill(200,200,200,20);
    //noStroke(); 
    ellipse(mouseX,mouseY, 15,15);
}
  
  function mouseMoved() {
  value = value + 1;
  if (value > 255) {
    value = 1;
  }
{
  fill(255);
  rect(50,50,100,100);
}
function mousePressed() {
  if (mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 150) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

  }
  
  