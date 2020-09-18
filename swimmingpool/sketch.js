
function setup() {
  createCanvas(displayWidth, displayHeight);
}
//function mousePressed(){
//  noLoop();
//}

let cOffset = 0;
function draw() {
  
  const inc = height/200;
	colorMode(HSB);
	
	for(let y = 0; y < height; y += inc) {
		let h = (y / height) * 360;
		fill(abs(h+cOffset)%360,50,70);
		noStroke();
		rect(0, y-inc, width, y); }
        cOffset -= 2  
  
  //fill(334,100,18);
  fill(238,100,56);
  rect(mouseX/8, mouseY/8, pmouseX+500, pmouseY+500,20);
  
}
function mousePressed(){

  fill(238,100,56);
  rect(0, 0, displayWidth, displayHeight);  
  noLoop();
} 