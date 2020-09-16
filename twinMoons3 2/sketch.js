const radius = 300;

function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
 // background(0);
}

function draw(){
background(random(8),random(8),random(8));

  ellipse(width/2,height/2,50,50);
  noStroke();
  //background(0,0,5);
  const dirY = (mouseY / height - 0.1) * 1;
  const dirX = (mouseX / width - 0.1) * 1;
  directionalLight(200, 200, 200, dirX, dirY, 1);
  translate(-1.5 * radius, 0, 0);
  sphere(radius);
  translate(3 * radius, 0, 0);
  sphere(radius);
}



  



  