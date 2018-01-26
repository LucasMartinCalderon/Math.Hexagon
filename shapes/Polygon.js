function Polygon (center, ctx, angle) {
  this.center = center;
  this.ctx = ctx;
  this.radius = 10;
  this.color = '#a38728';
  this.angle = angle;
  this.size = 40;
}

Polygon.prototype.draw = function () {

  this.ctx.beginPath();
  this.ctx.moveTo(this.center.x + this.size * Math.cos(0), this.center.y + this.size * Math.sin(0));
  
  for (var i = 0; i < 7; i++) {
    this.ctx.lineTo(this.center.x + this.size * Math.cos(i * 2 * Math.PI / 6), this.center.y + this.size * Math.sin(i * 2 * Math.PI / 6));
  }
  
  this.ctx.fillStyle = "#a38728";
  this.ctx.fill();
  


};
