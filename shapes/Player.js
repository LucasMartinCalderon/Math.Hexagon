function Player(ctx, center, initial_offset) {
  this.ctx = ctx;
  this.initial_offset = initial_offset;
  this.initial_degree = initial_offset;
  this.color;
  this.posX;
  this.posY;
  this.primeang = initial_offset * 2 * Math.PI / 360;
  this.center = center;
  this.distance;
  this.playerSpeed = 10;
  this.seconds;
  this.ballState = [false,false,false,false,false,false];
}

Player.prototype.giroIzquierda = function() {
 return 10
};
Player.prototype.giroDerecha = function() {
  return 350;
};
Player.prototype.move = function(key) {
  switch (key) {
    case 37:
      //movimiento
      this.initial_offset -= this.playerSpeed //+ 0.5;
      //Grados reales
      if(this.initial_degree+this.playerSpeed==360)this.initial_degree=0;
      else if (this.initial_degree > 360)this.initial_degree = this.initial_degree+this.playerSpeed;
      else this.initial_degree = this.initial_degree+this.playerSpeed //+ 0.5;
      break;

    case 39:
      //movimiento
      this.initial_offset += this.playerSpeed;
      //Grados reales
      if (this.initial_degree - this.playerSpeed < 0)this.initial_degree = 350;
      else this.initial_degree -= this.playerSpeed;
      break;
  }
  this.draw();
};
Player.prototype.checkCollision = function() {
  if (this.distance <= 50) {
      // //Rombo 0
      (this.initial_degree>240&&this.initial_degree<300)?this.ballState[0]=true:this.ballState[0]=false;
      //Rombo 1 
      (this.initial_degree>180&&this.initial_degree<240)?this.ballState[1]=true:this.ballState[1]=false;
      // //Rombo 2
      (this.initial_degree>120&&this.initial_degree<180)?this.ballState[2]=true:this.ballState[2]=false;
      // //Rombo 3
      (this.initial_degree>60&&this.initial_degree<120)?this.ballState[3]=true:this.ballState[3]=false;
      // //Rombo 4
      (this.initial_degree>0&&this.initial_degree<60)?this.ballState[4]=true:this.ballState[4]=false;
      // //Rombo 5
      (this.initial_degree>300&&this.initial_degree<360)?this.ballState[5]=true:this.ballState[5]=false;
  }
}

Player.prototype.draw = function() {
  this.distance = 50;
  this.color = 'white';
  this.posX =
    this.center.x +
    this.distance * Math.cos(this.initial_offset * 2 * Math.PI / 360);
  this.posY =
    this.center.y +
    this.distance * Math.sin(this.initial_offset * 2 * Math.PI / 360);
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.posX, this.posY, 5, 0, Math.PI * 2);
  this.ctx.fill();
};

var seconds = 0;

Player.prototype.counter = function() {
  setInterval(function() {
    this.seconds++;
  }, 1000);
  return this.seconds;
};

Player.prototype.score = function() {
  this.ctx.save();
  this.ctx.fillStyle = 'white';
  this.ctx.font = '20px Arial';
  this.ctx.fillText('Time: ' + this.counter(), 20, 40);
  this.ctx.restore();
};
