function Player (ctx, canvas, angle) {
  this.ctx = ctx;
  this.ang = angle;
  this.distanceX;
  this.color;
  this.posX;
  this.posY;
  this.canvas = canvas;
  this.primeang = (angle * 2 * Math.PI) / 360;
}

Player.prototype.move = function (key) {
  switch (key) {
    case 37:
    this.aux = this.ang;
    this.ang -= 40 + 0.5;
    break;
    case 39:
    this.ang += 40;
    break;
  }
  this.draw();
}

Player.prototype.draw = function () {
  this.distanceX = 45;
  this.distanceY = 45;
  this.color = 'white';
  this.posX = this.canvas.width / 2 + this.distanceX * Math.cos ( (this.ang * 2 * Math.PI) / 360);
  this.posY = this.canvas.height / 2 + this.distanceY * Math.sin ( (this.ang * 2 * Math.PI) / 360);
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.moveTo(this.posX + 6 * (1 - Math.sin(this.primeang)), this.posY - 6 * (Math.cos(this.primeang)));
  this.ctx.lineTo(this.posX  + 6 * (1 - Math.sin(this.primeang)),this.posY + 6 * ( 1 - Math.cos(this.primeang)));
  this.ctx.lineTo(this.posX + 12 * (1 - Math.sin(this.primeang)), this.posY);
  this.ctx.fill();
}

Player.prototype.collide = function () {
  
}




