function Trapeze (center, distance, ctx, initial_offset, speed, player) {
  this.center = center;
  this.distance = distance;
  this.height = Math.floor(Math.random() * 50);
  this.color = "#"+((1<<24)*Math.random()|0).toString(16);
  this.ctx = ctx;
  this.sides = Math.floor(Math.random()*6);
  this.randomSeed = Math.ceil(Math.random()*10);
  this.initial_offset = initial_offset;
  this.markForDelete = false;
  this.speed = speed;
  this.player = player;
  var aux = [0,1,2,3,4,5];
  this.numbers = _.sampleSize(aux, Math.ceil(Math.random() * 5));
}

Trapeze.prototype.update = function() {
  if(this.distance >= 0){
    this.distance -= this.speed;
  }else{
    this.markForDelete = true;
  }
}

Trapeze.prototype.degToDeg = function (deg) {
  var reminder = Math.abs(deg % 360);
  if (reminder >= 360) {
    degToDeg(reminder);
  } else {
    return reminder;
  }
}

Trapeze.prototype.checkCollision = function() {
  if (this.distance <= 50) {
    for (var i = 0; i < this.numbers.length; i++) {
      if (this.degToDeg(this.player.initial_offset) >= this.degToDeg(this.numbers[i] * 60) && this.degToDeg(this.player.initial_offset) <= this.degToDeg(this.numbers[i] * 60 + 60)) {
        this.gameOver(this.degToDeg(this.numbers[i] * 60));
      }
    }
  }
}


Trapeze.prototype.draw = function() {
  
  for (var i = 0; i < this.numbers.length; i++) {

    var angle = Math.PI * this.numbers[i] / 3;

    x1 = this.center.x + Math.cos( Math.PI / 3 + angle) * this.distance;
    y1 = this.center.y + Math.sin( Math.PI / 3 + angle) * this.distance;

    x2 = this.center.x + Math.cos( Math.PI / 3 + angle + Math.PI / 3) * this.distance;
    y2 = this.center.y + Math.sin( Math.PI / 3 + angle + Math.PI / 3) * this.distance;

    x3 = this.center.x + Math.cos( Math.PI / 3 + angle + Math.PI / 3) * (this.distance + this.height);
    y3 = this.center.y + Math.sin( Math.PI / 3 + angle + Math.PI / 3) * (this.distance + this.height);

    x4 = this.center.x + Math.cos( Math.PI / 3 + angle) * (this.distance + this.height);
    y4 = this.center.y + Math.sin( Math.PI / 3 + angle) * (this.distance + this.height);

    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineTo(x3, y3);
    this.ctx.lineTo(x4, y4);
    this.ctx.closePath();
    this.ctx.fill();
  }
};

Trapeze.prototype.gameOver = function () {
  alert("YOU LOSE!!!" + ' YOUR SCORE IS: ' + this.player.seconds);
};

