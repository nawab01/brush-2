function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
  var x=3;
  var first=random(0,255);
  var second = random (0,255);
  var third = random (0,255);
 

  this.show = function() {
    stroke(first,second,third);
    strokeWeight(x);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.branchA = function() {

    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(45);
    dir.mult(.95);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }
  
  this.branchB = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-25);
    dir.mult(.95);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }

}