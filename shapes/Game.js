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
  this.obstacleInterval = 1000;
  this.background = new Background (this.ctx, 0, this.center);
  this.hexagon = new Polygon (this.center, this.ctx, 0);
  this.player = new Player (this.ctx, this.center, 0);
  var that = this;
  this.isLoadCanvas = true;

  // Every 1.5 seconds create an obstacle
  setInterval(function(){
    this.Trapeze
    that.createObstacle();
    that.background.update();
  },this.obstacleInterval);


}


Game.prototype.createObstacle = function(){
  // console.log("create")
  // console.log(new Date())
  this.obstacles.push(new Trapeze (this.center, 600, this.ctx, 0, this.obstacleSpeed, this.player));
  this.obstacleCount++;
  if(this.obstacleCount > 20){
    // this.obstacleSpeed += 0.1;
    // this.obstacleInterval -= 8;
    //this.player.playerSpeed += 0.1;
  }
};



Game.prototype.update = function(){

  this.ctx.clearRect(0, 0, this.canvas.width, 
  this.canvas.height);
  
  this.background.draw();
  this.hexagon.draw();
  this.player.draw();
  this.player.score();
  this.player.checkCollision();

  this.obstacles.forEach((e) =>{
    e.draw();
    e.update();
    if(e.hit[0]&&this.player.ballState[0])console.log("te di en el 0")
    if(e.hit[1]&&this.player.ballState[1])console.log("te di en el 1")
    if(e.hit[2]&&this.player.ballState[2])console.log("te di en el 2")
    if(e.hit[3]&&this.player.ballState[3])console.log("te di en el 3")
    if(e.hit[4]&&this.player.ballState[4])console.log("te di en el 4")
    if(e.hit[5]&&this.player.ballState[5])console.log("te di en el 5")
  });
  
  this.obstacles = this.obstacles.filter(function(e){
    return !e.markForDelete;    
  });
  
};


