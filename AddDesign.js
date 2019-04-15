var textlocation = 98;
var textloca = 75;
var circleX = 200;
var circleY = 200;
var semiX = circleX;
var semiXbottom = circleX+17; 

noStroke();
draw= function() {
background(0, 255, 213);
fill(155, 12, 212);
textSize(20);

text("THE WORLD'S BIGGEST BOUNCY BALL", 10, 30);
fill(37, 118, 204);
textSize(18);
text("SO FUN TO PLAY WITH",random(0,400), random(0,400));
fill(234, 242, 14);
ellipse(mouseX,mouseY,circleX,circleY);
fill(57, 116, 219);
arc(mouseX+35,mouseY,132,179,-81,70);
arc(mouseX-35,mouseY,133,180,-257,-99);
fill(255, 0, 0);
triangle(mouseX-11,mouseY-67,mouseX-30,mouseY-7,mouseX+17,mouseY+-22);
triangle(mouseX+-40,mouseY+-39,mouseX+13,mouseY+-52,mouseX+-2,mouseY+8);
};

