function setup() {
  createCanvas(displayWidth, displayHeight);
  //Liking the idea of having a different    background load up for each veiwer 
  background(random(100),random(100),random(100));
}

function draw() {
      ellipse(width/2,height/2,50,50);
      ellipse(mouseX, mouseY, 20, 20);
}
function mousePressed() {
  clear();
  background(128);
}


  



  
