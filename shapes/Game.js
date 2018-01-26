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
  this.obstacleInterval = 3000;
  this.background = new Background (this.ctx, 0, this.center);
  this.hexagon = new Polygon (this.center, this.ctx, 0);
  this.player = new Player (this.ctx, this.center, 0);
  var that = this;
  this.seconds = 0;

  // Every 1.5 seconds create an obstacle
  setInterval(function(){
    this.Trapeze
    that.createObstacle();
    that.background.update();
  },this.obstacleInterval);


}


Game.prototype.createObstacle = function(){
  this.obstacles.push(new Trapeze (this.center, 600, this.ctx, 0, this.obstacleSpeed, this.player));
  this.obstacleCount++;
  if(this.obstacleCount > 5){
    this.obstacleSpeed += 0.2;
    this.obstacleInterval -= 100;
    this.player.playerSpeed += 0.2;
  }
};


Game.prototype.score = function () {
  var that = this;
  setInterval(function() {
    that.seconds++;
  }, 1000);
  this.ctx.font = "20px Monaco";
  this.ctx.fillStyle = "#0095DD";
  this.ctx.fillText("SCORE: " + this.seconds, 40, 60);
}


Game.prototype.update = function(audio){

  var angle = 0;
  this.ctx.clearRect(0, 0, this.canvas.width, 
  this.canvas.height);  
  
  this.background.draw();
  this.player.update();
  this.player.draw();
  this.score();
  
  var ball_angle = radToDeg(this.player.angle) % 360;
  if(ball_angle < 0){
    ball_angle = 360 + ball_angle;
  }  
  this.obstacles.forEach((e) =>{
    e.draw();
    e.update();
    var result = e.checkCollision(ball_angle, this.player.distance);
    if(result){
      alert("GAME END. YOUR SCORE IS: " + this.seconds);
      audio.pause();
    }  
  });  
  this.hexagon.draw();
  
  this.obstacles = this.obstacles.filter(function(e){
    return !e.markForDelete;    
  });  

};  


