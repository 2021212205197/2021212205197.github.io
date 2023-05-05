var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800,
  frameRate: 24
});

var circleSize = 150;
var numPoints = 30;
var angle = 360 / numPoints;

// first make a polygon by using sin and cos
var poly = r.polygon(200, 200)
  .fill(false)
  .stroke(0, 0, 0, 0.5);

for(var i = 0; i < numPoints; i++) {
  var x = Math.cos(Rune.radians(angle * i)) * circleSize;
  var y = Math.sin(Rune.radians(angle * i)) * circleSize;
  poly.lineTo(x, y);
}

r.on('update', function(stage) {
  poly = poly.copy();
  for(var i = 0; i < poly.state.vectors.length; i++){
    poly.state.vectors[i].x += Rune.random(-2,2);
    poly.state.vectors[i].y += Rune.random(-2,2);
  }
});

r.on('mousemove', function(mouse) {
  poly.move(mouse.x, mouse.y);
});

r.play();
