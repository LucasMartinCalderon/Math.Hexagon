function Trapeze (center, distance, ctx, initial_offset, speed) {
  this.center = center;
  this.distance = distance;
  this.height = Math.floor(Math.random() * 50);
  this.color = "#"+((1<<24)*Math.random()|0).toString(16);
  this.ctx = ctx;
  this.sides = Math.floor(Math.random()*6);
  this.randomSeed = Math.ceil(Math.random()*10);
  this.initial_offset = initial_offset;
  this.markForDelete = false;
  this.speed = speed;
  var aux = [0,1,2,3,4,5];
  this.numbers = _.sampleSize(aux, Math.ceil(Math.random() * 5));
}


Trapeze.prototype.update = function() {
  if(this.distance >= 0){
    this.distance -= this.speed;
  }else{
    this.markForDelete = true;
  }
}

Trapeze.prototype.checkCollision = function(angle, distance){
  if(this.distance <= distance && this.distance >= distance - 10){
    for (var i = 0; i < this.numbers.length; i++) {
      var angleStart = radToDeg(Math.PI/3  * this.numbers[i]);
      var angleEnd = angleStart + radToDeg(Math.PI/3);
      if(angle >= angleStart && angle <= angleEnd){
        return true;
      }
    }
  }
  return false;
};


Trapeze.prototype.draw = function() {
  
  for (var i = 0; i < this.numbers.length; i++) {

    var angle = Math.PI/3  * this.numbers[i];

    x1 = this.center.x + Math.cos(angle) * this.distance;
    y1 = this.center.y + Math.sin(angle) * this.distance;

    x2 = this.center.x + Math.cos(angle + Math.PI / 3) * this.distance;
    y2 = this.center.y + Math.sin(angle + Math.PI / 3) * this.distance;

    x3 = this.center.x + Math.cos(angle + Math.PI / 3) * (this.distance + this.height);
    y3 = this.center.y + Math.sin(angle + Math.PI / 3) * (this.distance + this.height);

    x4 = this.center.x + Math.cos(angle) * (this.distance + this.height);
    y4 = this.center.y + Math.sin(angle) * (this.distance + this.height);

    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineTo(x3, y3);
    this.ctx.lineTo(x4, y4);
    this.ctx.closePath();
    this.ctx.fill();
  }
};


