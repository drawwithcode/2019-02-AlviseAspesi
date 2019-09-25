function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background("grey");
  angleMode(DEGREES);

}


function draw() {
  var colorList = ["#d8a47f", "#EF8354", "#EE4B6A", "#DF3B57"];

  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  stroke(color(colorHex));
  line(mouseX, 0, mouseX, windowHeight);

  var x = 0;
  var y = 0;
  var r = 150;
  var s = 0;

  noFill();
  strokeWeight(4);
  stroke("black");
  translate(x, frameCount);
  for(var x = 0; x < windowWidth; x += 300) {
  for(var y = -100; y < windowHeight + 100; y += 10) {
    bezier(x, y+50, x+50, y+50, x+100, y-50, x+150, y+50);
  }
  }
  for(var r = 150; r < windowWidth; r += 300) {
  for(var s = -100; s < windowHeight + 100; s+=10) {
    bezier(r, s+50, r+50, s-50, r+100, s+50, r+150, s+50);
  }
  }


}
