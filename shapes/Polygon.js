function Polygon (posx, posy, radius, sides, color, ctx, rotation, canvas) {

  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  var rad = (2*Math.PI)/sides;

  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate((2 * Math.PI * rotation) / 360);
  
  ctx.beginPath();
      for(i = 0; i < sides; i++ ){
      var x = posx + radius * Math.cos( rad*i );
      var y = posy + radius * Math.sin( rad*i );
      ctx.lineTo(x, y);
      }

  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.setTransform(1, 0, 0, 1, 0, 0);

};
