var img;
var canvasSize=500;
var pg;

function preload(){
  img = loadImage('sunimage.jpg');
}

function setup() {
  createCanvas(canvasSize, canvasSize+100);
  textSize(32);
  background(220);
  pg = createGraphics(canvasSize, canvasSize);

}


 
function mousePressed(){
  strokeWeight(10);
  pg.fill(255, 0, 0);
  pg.ellipse(mouseX, mouseY, 20, 20);
  //fill(255,255,0,255);
  //let Xc=mouseX;
  //let Xy=mouseY;
  //circle(Xc,Xy,10)
  
}




function draw() {
//Carga imagen
  img.resize(canvasSize, canvasSize);
  image(img,0,0);
  
//Dibujo del circulo de lectura
  strokeWeight(2);
  stroke(255);
  fill(0,0,0,0);
   
  let x=mouseX-250;
  let y=mouseY-250;
  let r=abs(sqrt(pow(x,2)+pow(y,2)));
  let d = 2*r;
  if (d<canvasSize){
  circle(250,250,d);    
  } else {
  circle(250,250,canvasSize);  
  }

  image(pg,0,0);
  
  
} 