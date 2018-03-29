
var tree1 = [];
var tree2 = [];
var tree3 = [];
var c=1;
var root1, root2, root3;
function setup() {
  createCanvas(1200, 800);
  
  angleMode(DEGREES);
  
}

function mousePressed() {
  var a = createVector(mouseX, mouseY);
  var b = createVector(mouseX, mouseY-50);
  var root1 = new Branch(a, b);
  tree1[tree1.length] = root1;
  var a = createVector(mouseX, mouseY);
  var b = createVector(mouseX+50, mouseY + 25);
  var root2 = new Branch(a, b);
  tree2[tree2.length] = root2;
  var a = createVector(mouseX, mouseY);
  var b = createVector(mouseX-50, mouseY + 25);
  var root3 = new Branch(a, b);
  tree3[tree3.length] = root3;

  for (var i = tree1.length - 1; i >= tree1.length - (c*3); i--) {
    if(!tree1[i].finished){
    tree1.push(tree1[i].branchA());
    tree1.push(tree1[i].branchB());
}
tree1[i].finished = true;
}
for (var i = tree2.length - 1; i >= tree2.length - (c*3); i--) {
    if(!tree2[i].finished){
    tree2.push(tree2[i].branchA());
    tree2.push(tree2[i].branchB());
}
tree2[i].finished = true;
}
for (var i = tree3.length - 1; i >= tree3.length - (c*3); i--) {
   if(!tree3[i].finished){
   tree3.push(tree3[i].branchA());
   tree3.push(tree3[i].branchB());
}
tree3[i].finished = true;
}
c++;
count++;
if (count ==2) {
    for (var i = 0; i < tree1.length; i++) {
      if (!tree1[i].finished) {
        var leaf = tree1[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}
function mouseMoved() {
  c = 1;
}

function draw() {
  background(253, 246,237);
frameRate(10);
  for (var i = 0; i < tree1.length; i++) {
    // tree1[i].x 
    tree1[i].show();
    tree2[i].show();
    tree3[i].show(); 
  }

}