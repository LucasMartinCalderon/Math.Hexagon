function Game() {
  this.canvas = document.getElementById('game');
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.center = {
    x: this.canvas.width / 2,
    y: this.canvas.height / 2,
  };
  this.obstacles = [];
  this.createObstacle();
  this.obstacleSpeed = 2;
  this.obstacleCount = 0;
  this.obstacleInterval = 700;
  this.background = new Background (this.ctx, 0, this.center);
  this.player = new Player (this.ctx, this.center, 0);
  this.hexagon = new Polygon (this.center, this.ctx, 0, 6);
  var that = this;
  

  // Every 1.5 seconds create an obstacle
  setInterval(function(){
    that.createObstacle();
    that.background.update();
  },this.obstacleInterval);
}


Game.prototype.createObstacle = function(){
  
  this.obstacles.push(new Trapeze(this.center, 600, this.ctx, 0, this.obstacleSpeed, this.player));
  this.obstacleCount++;
  if(this.obstacleCount > 20){
    this.obstacleSpeed += 0.1;
    this.obstacleInterval -= 8;
    this.player.playerSpeed += 0.5;
  }
};



Game.prototype.update = function(){

  this.ctx.clearRect(0, 0, this.canvas.width, 
  this.canvas.height);
  
  this.background.draw();
  this.hexagon.draw();
  this.player.draw();
  this.obstacles.forEach(function(e) {
    e.draw();
    e.update();
    e.checkCollision();
    //MAKE GAME OVER?
  });
  
  this.obstacles = this.obstacles.filter(function(e){
    return !e.markForDelete;    
  });
  
};