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
  this.aux = [0,1,2,3,4,5];
  this.numbers = _.sampleSize(this.aux, Math.ceil(Math.random() * 5));
  this.hit = [false,false,false,false,false,false]

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

Trapeze.prototype.draw = function() {
  
  for (var i = 0; i < this.numbers.length; i++) {

    var angle = Math.PI * this.numbers[i] / 3;

    x1 = this.center.x + Math.cos( Math.PI / 3 + angle) * this.distance;
    y1 = this.center.y + Math.sin( Math.PI / 3 + angle) * this.distance;
    //0
    if(y1>440&&y1<450)this.hit[0] = true;
    //1
    if(y1>440&&y1<450)this.hit[1] = true;
    // // if(this.distance==50) {console.log(y1,x1)}
    // // //2
    if(y1>410&&y1<420)this.hit[2] = true;
    // // //3
    if(y1>340&&y1<350)this.hit[3] = true;
    // // //4
    if(y1>440&&y1<450)this.hit[4] = true;
    // // //5
    if(y1>440&&y1<450)this.hit[5] = true;



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
  // game.isLoadCanvas()
};

