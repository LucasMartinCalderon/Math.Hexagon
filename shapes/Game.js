function Game () {


  this.canvas = document.getElementById('game');
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;


  var distance1 = 800, distance2 = 800, distance3 = 800, distance4 = 800;
  var that = this;
  var ang = 0;
  
  this.sides1 = 4, this.sides2 = 4, this.sides3 = 4, this.number = 1;

  this.player = new Player (that.ctx, that.canvas, ang);
  this.player.draw()
  
  setInterval(function() {
    
    that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);

    
    that.triangles = new Triangles (that.ctx, that.canvas, ang);
    that.hexagon = new Polygon (0, 0, 35, 6, '#fb6733', that.ctx, ang, that.canvas);
    that.trapeze1 = new Trapeze (that.canvas.width / 2, that.canvas.height / 2, 40, distance1 + 200, '#493267', that.ctx, ang, this.sides1, that.number);
    that.trapeze2 = new Trapeze (that.canvas.width / 2, that.canvas.height / 2, distance2 + 100, 35, '#703bd8', that.ctx, ang, this.sides2, that.number);
    that.trapeze3 = new Trapeze (that.canvas.width / 2, that.canvas.height / 2, distance3 , 35, '#c2c2ff', that.ctx, ang, this.sides3, that.number);
    
    
    
    if (that.trapeze1.distance === 0 ) { distance1 = 800; sides1 = Math.floor(Math.random() * 6); that.number = Math.ceil(Math.random()*5);}
    if (that.trapeze2.distance === 0 ) { distance2 = 800; sides2 = Math.floor(Math.random() * 6); that.number = Math.ceil(Math.random()*5);}
    if (that.trapeze3.distance === 0 ) { distance3 = 800; sides3 = Math.floor(Math.random() * 6); that.number = Math.ceil(Math.random()*5);}
    
    distance1 -= 1;
    distance2 -= 1;
    distance3 -= 1;
    distance4 -= 1;
    ang += 0.5;
    if (ang === 360) ang = 0;


    that.player.move();
    that.player.ang += 0.5;


    }, 1);
  }



