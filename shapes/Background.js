function Background (ctx, initial_offset, center) {
  this.ctx = ctx;
  this.center = center;
  this.initial_offset = initial_offset;
  this.size = 1000;
  this.firstColor = '#420000';
  this.secondColor = '#590000';
  this.currentColor = this.firstColor;
}

Background.prototype.draw = function () {

  this.initial_offset *= (2 * Math.PI) / 360;

  if (this.initial_offset >= 2 * Math.PI)  { this.initial_offset = 0; }


  for(var i = 0; i < 360; i += 360 / 6) {
   
    if(i % 2 == 0) {
      if (this.currentColor == this.firstColor) this.currentColor = this.secondColor;
      else this.currentColor = this.firstColor;
     }
    
    this.radPosX = ((i - 360 / 6) * 2 * Math.PI) / 360;

    this.posX = this.center.x + Math.cos( this.radPosX + this.initial_offset ) * this.size;
    this.posY = this.center.y + Math.sin( this.radPosX + this.initial_offset) * this.size;;
    
    this.maxX = this.center.x + Math.cos((i * 2 * Math.PI ) / 360  + this.initial_offset) * this.size;
    this.maxY = this.center.y + Math.sin((i * 2 * Math.PI ) / 360  + this.initial_offset)  * this.size;




    this.ctx.beginPath();
    this.ctx.moveTo(this.center.x, this.center.y);
    this.ctx.lineTo(this.posX, this.posY);
    this.ctx.lineTo(this.maxX, this.maxY);
    this.ctx.closePath();
      
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.stroke();
      
    this.ctx.fillStyle = this.currentColor;
    this.ctx.fill();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
};

var counter = 0; 

Background.prototype.update = function () {
  if (counter % 2 === 0) {
    this.secondColor = '#420000';
    this.firstColor = '#590000';
    this.currentColor = this.firstColor;
  } else {
    this.firstColor = '#420000';
    this.secondColor = '#590000';
    this.currentColor = this.firstColor;
  }
  counter++;
}
