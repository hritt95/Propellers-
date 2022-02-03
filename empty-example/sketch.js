/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let a = 0;

function setup() {
  createCanvas(1000, 1000);
  background(0);
}
let angle1 =0;
let change1 =0;
let angle2 = 0;
let change2 = 0;
function draw() {
  push()
  fill(255);
  translate(width/2, height/2);
  rotate(angle1)
  rect (0,0, 20, 155);
  pop()
  if(mouseX < 100){
    change1= -0.08
  }
  else if(mouseX>= 100 && mouseX< 300){
    change1= -0.04;
  }
  else if(mouseX>= 300 && mouseX< 500){
    change1= -0.02;
  }
  else{
    change1=0.02;
  }

  angle1 += change1;
  push()
  fill(100);
  translate(width/5, height/5);
  rotate(angle2)
  rect (0, 0, 20, 155);
  pop()
  if(mouseY < 100){
    change2= -0.08
  }
  else if(mouseY>= 100 && mouseY< 300){
    change2= -0.04;
  }
  else if(mouseY>= 300 && mouseY< 500){
    change2= -0.02;
  }
  else{
    change2=0.02;
  }
  angle2+=change2;
  

} 