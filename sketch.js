function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220)
}

function draw() {
    fill(random(255),random(255),random(255))
    circle(random(windowWidth),random(windowHeight),random(200))

}

function mousePressed() {
    userStartAudio();
    for (var i=0; i<100; i++) {
        fill(random(255),random(255),random(255))
        circle(random(800),random(800),random(200))
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
