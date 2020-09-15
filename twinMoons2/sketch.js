const radius = 300;

function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
  //Liking the idea of having a different    background load up for each veiwer 
//  background(random(20),random(20),random(20));
  background(0);
}

function draw() {
  
  ellipse(width/2,height/2,50,50);
   ellipse(mouseX, mouseY, 20, 20);
  noStroke();
  background(0);
  const dirY = (mouseY / height - 0.1) * 4;
  const dirX = (mouseX / width - 0.1) * 4;
  directionalLight(204, 204, 204, dirX, dirY, 1);
  translate(-1.5 * radius, 0, 0);
  sphere(radius);
  translate(3 * radius, 0, 0);
  sphere(radius);
}






  



  