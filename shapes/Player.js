function Player (ctx, center, initial_offset) {
  this.ctx = ctx;
  this.initial_offset = initial_offset;
  this.color ;
  this.posX;
  this.posY;
  this.primeang = (initial_offset * 2 * Math.PI) / 360;
  this.center = center;
  this.distance;
  this.playerSpeed = 30;
}

Player.prototype.move = function (key) {
  switch (key) {
    case 37:
    this.initial_offset -= this.playerSpeed + 0.5;
    break;
    case 39:
    this.initial_offset += this.playerSpeed;
    break;
  }
  this.draw();
}

Player.prototype.draw = function () {
  this.distance = 50;
  this.color = 'white';
  this.posX = this.center.x + this.distance * Math.cos ( (this.initial_offset * 2 * Math.PI) / 360);
  this.posY = this.center.y + this.distance * Math.sin ( (this.initial_offset * 2 * Math.PI) / 360);
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.posX, this.posY, 5, 0, Math.PI*2);
  this.ctx.fill();
};

var seconds = 0;

Player.prototype.counter = function () {
  setInterval(function() {
    seconds++;
  }, 1000);
  return seconds;
}

Player.prototype.score = function () {
  this.ctx.save();
  this.ctx.fillStyle = 'white';
  this.ctx.font = '20px Arial';
  this.ctx.fillText('Time: ' + this.counter(), 20, 40);
  this.ctx.restore();
}





