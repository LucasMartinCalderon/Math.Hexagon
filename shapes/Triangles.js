function Triangles (ctx, canvas, angle) {

  ctx.angle = angle; 
  ctx.angle *= (2 * Math.PI) / 360;
  if (ctx.angle > 2 * Math.PI)  { ctx.angle = 0; }

  ctx.size = 800;
  ctx.firstColor = 'red';
  ctx.secondColor = 'blue';
  ctx.currentColor = ctx.firstColor;

  for(ctx.i = 0; ctx.i < 360; ctx.i += 360 / 6) {

    if(ctx.i % 2 === 0) {
        if (ctx.currentColor == ctx.ctfirstColor)  { ctx.currentColor = ctx.secondColor; }
        else  { ctx.currentColor = ctx.firstColor; }
    }
    
    ctx.radPosX = ((ctx.i - 360 / 6) * 2 * Math.PI) / 360;

    ctx.posX = canvas.width / 2 + Math.cos( ctx.radPosX + ctx.angle ) * ctx.size;
    ctx.posY = canvas.height / 2 + Math.sin( ctx.radPosX + ctx.angle) * ctx.size;;
    
    ctx.maxX = canvas.width / 2 + Math.cos((ctx.i * 2 * Math.PI ) / 360  + ctx.angle) * ctx.size;
    ctx.maxY = canvas.height / 2 + Math.sin((ctx.i * 2 * Math.PI ) / 360  + ctx.angle)  * ctx.size;




    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    ctx.lineTo(ctx.posX, ctx.posY);
    ctx.lineTo(ctx.maxX, ctx.maxY);
    ctx.closePath();
      
    // the outline
    ctx.lineWidth = 1;
    ctx.strokeStyle = ctx.currentColor;
    ctx.stroke();
      
    // the fill color
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    angle += 1,5;
}

}