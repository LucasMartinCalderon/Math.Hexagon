function Player(ctx, center, start_angle) {
  this.ctx = ctx;
  this.angle = start_angle;
  this.color;
  this.center = center;
  this.speed = 0;
  this.distance = 50;
  this.color = 'white';
}

Player.prototype.move = function(direction) {
  this.speed = degToRad(4) * direction;
}

Player.prototype.update = function() {
  this.angle = this.angle + this.speed;
}


Player.prototype.draw = function() {
  this.posX = this.center.x + this.distance * Math.cos(this.angle);
  this.posY = this.center.y + this.distance * Math.sin(this.angle);
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.posX, this.posY, 5, 0, Math.PI * 2);
  this.ctx.fill();
};
