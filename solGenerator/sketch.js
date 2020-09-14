let x=new Array(50);
let y=new Array(50);

function setup(){
 createCanvas(displayWidth,displayHeight);
 for(let i=0;i<x.length;i=i+1){
    x[i]=random(width);
   y[i]=random(height);
   strokeWeight(.1);
  }
}

function draw(){
  background(255);
  for(let j=0;j<x.length;j=j+1){
  for(let i=0;i<x.length;i=i+1){
    point(x[i],y[i]);
    line(x[i],y[i],x[j],y[j]);
  }
}
noLoop();
}
function mousePressed(){
  background(255);
    for(let i=0;i<x.length;i=i+1){
    x[i]=random(width);
    y[i]=random(height);
    strokeWeight(.1);
    }
    loop();
}