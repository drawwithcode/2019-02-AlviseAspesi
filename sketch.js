function preload() {
  font = loadFont('assets/gt-walsheim-bold.ttf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background("grey");
  angleMode(DEGREES);
}

function draw() {
  push();
  var colorList = ["#41337A", "#EF8354"];
  var colorList2 = ["#84732B", "#DF3B57"];
  var colorList3 = ["#F0C987", "#89BD9E"];
  var colorList4 = ["#6EA4BF", "#1C3A13"];

  if (mouseX < windowWidth / 2 && mouseY < windowHeight / 2) {
    var index = floor(random() * colorList.length);
    var colorHex = colorList[index];
    stroke(color(colorHex));
  } else if (mouseX > windowWidth / 2 && mouseY < windowHeight / 2) {
    var index2 = floor(random() * colorList2.length);
    var colorHex2 = colorList2[index2];
    stroke(color(colorHex2));
  } else if (mouseX > windowWidth / 2 && mouseY > windowHeight / 2) {
    var index3 = floor(random() * colorList3.length);
    var colorHex3 = colorList3[index3];
    stroke(color(colorHex3));
  } else if (mouseX < windowWidth / 2 && mouseY > windowHeight / 2) {
    var index4 = floor(random() * colorList4.length);
    var colorHex4 = colorList4[index4];
    stroke(color(colorHex4));
  }

  strokeWeight(4);
  line(mouseX, 0, mouseX, windowHeight);

  var x = 0;
  var y = 0;
  var r = 150;
  var s = 0;

  noFill();
  strokeWeight(3);
  stroke("black");
  translate(x, frameCount / 2);

  for (var x = 0; x < windowWidth; x += 300) {
    for (var y = -100; y < windowHeight + 100; y += 10) {
      bezier(x, y + 50, x + 50, y + 50, x + 100, y - 50, x + 150, y + 50);
    }
  }
  for (var r = 150; r < windowWidth; r += 300) {
    for (var s = -100; s < windowHeight + 100; s += 10) {
      bezier(r, s + 50, r + 50, s - 50, r + 100, s + 50, r + 150, s + 50);
    }
  }

  if (mouseIsPressed) {
    document.location.reload();
  }
  pop();

  push();
  textAlign(CENTER,CENTER);
  textSize(20);
  fill("white");
  textFont(font);
  text("move the mouse to change the colors", windowWidth/2, windowHeight/2);
  text("Click to refresh", windowWidth/2, windowHeight - 50);
  pop();

}
