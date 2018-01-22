function Game () {
  this.canvas = document.getElementById('game');
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.triangles = new Triangles(this.ctx, this.canvas, 0);
  this.hexagon = new Polygon(0, 0, 35, 6, 'blue', this.ctx, 0, this.canvas);
}