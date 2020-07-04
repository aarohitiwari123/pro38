var canvas, backgroundImage;
var drawing = [];
var currentPath= [];

function setup(){
  canvas = createCanvas(400,400);
  canvas.mousePressed(startPath);
//  canvas.mouseReleased(endPath);
}

function startPath(){
  currentPath = [];
  drawing.push(currentPath);
}

function draw(){
  background(255)

  if(mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }
    stroke(0);
    strokeWeight(4);
    noFill();
    for( var i = 0; i < drawing.length; i++){
      var path = drawing[i];
      beginShape();
    for( var j = 0; j < path.length; j++){
      vertex(path[j].x, path[j].y)
    }
    endShape();
  }  
}
