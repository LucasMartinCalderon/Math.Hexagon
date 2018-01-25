function Polygon (center, ctx, initial_offset) {
  this.center = center;
  this.ctx = ctx;
  this.radius = 10;
  this.sides = 6;
  this.color;
  this.initial_offset = initial_offset;
}

Polygon.prototype.draw = function () {

  this.color = '#80010';
  this.ctx.fillStyle = this.color;
  this.ctx.strokeStyle = this.color;

  var rad = (2*Math.PI) / 6;

  this.ctx.translate(this.center.x, this.center.y);
  this.ctx.rotate((2 * Math.PI * this.initial_offset) / 360);
  
  this.ctx.beginPath();

  for (var i = 0; i < 6; i++ ) {
    var x = this.center.x + this.radius * Math.cos(rad * i);
    var y = this.center.y + this.radius * Math.sin(rad * i);
    this.ctx.lineTo(x, y);
  }

  this.ctx.closePath();
  this.ctx.fill();
  this.ctx.stroke();
  this.ctx.setTransform(1, 0, 0, 1, 0, 0);

};

