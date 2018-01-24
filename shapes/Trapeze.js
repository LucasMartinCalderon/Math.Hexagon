function _degtorad(ang) {
  return ang * 2 * Math.PI / 360;
}

function Trapeze(offsetX, offsetY, distance, height, color, ctx, ang, sides, number) {
  this.distance = distance;
  for (var i = 0; i < sides; i++) {
    var angle =  number * Math.PI / 3 * i + _degtorad(ang);

    x1 = offsetX + Math.cos( Math.PI / 3 + angle) * distance;
    y1 = offsetY + Math.sin( Math.PI / 3 + angle) * distance;

    x2 = offsetX + Math.cos( Math.PI / 3 + angle + Math.PI / 3) * distance;
    y2 = offsetY + Math.sin( Math.PI / 3 + angle + Math.PI / 3) * distance;

    x3 = offsetX + Math.cos( Math.PI / 3 + angle + Math.PI / 3) * (distance + height);
    y3 = offsetY + Math.sin( Math.PI / 3 + angle + Math.PI / 3) * (distance + height);

    x4 = offsetX + Math.cos( Math.PI / 3 + angle) * (distance + height);
    y4 = offsetY + Math.sin( Math.PI / 3 + angle) * (distance + height);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.closePath();
    ctx.fill();
  }
}
