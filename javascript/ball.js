var diam;
var offset;
var x;
var y;

function setup () {
  createCanvas (400, 400);
  angleMode (DEGREES);
  diam = 150;
  offset = 0.2 * diam;
  x = width / 2;
  y = height / 2;
}

function draw () {
  background (220);

  fill (255, 200, 0);
  ellipse (x, y, diam, diam);

  fill (0, 0, 255);
  ellipse (x - offset, y - offset, diam / 7, diam / 7);
  ellipse (x + offset, y - offset, diam / 7, diam / 7);
  noFill ();
  arc (x, y, diam * 0.6, diam * 0.4, 0, 180);
}
