let value = 0;

function setup(){
  createCanvas(displayWidth,displayHeight);
  background(0);
  frameRate(60);
}

function draw(){
{
    fill(value, value, value, 50); 
    ellipse(mouseX,mouseY, 15,15);
  }
  fill(255,60,60,30);
  rect(100,100,value+displayWidth/2,value+displayHeight/2);
 // rect(width/2,height/2,value+80,value+80,value+1);
}
        function mousePressed(){
        fill(abs(0*cos(frameCount*.01)));
        rect(width/5,height/5,value+120,value+120);

        }
function mouseMoved() {
  fill(255- value-2,60,60,30);
  rect(100,100,value+displayWidth/2,value+displayHeight/2);  
  value = value + 1;
  if (value > 255) {
    value = 0;
 
  }
}