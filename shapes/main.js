function degToRad(a){
  return a * 2*Math.PI / 360;
}

function radToDeg(a){
  return a * 180 / Math.PI;
}



window.onload = function () {

  var game = new Game();

  setInterval(function() {
    //console.log(game.obstaclePosition)
      game.update();
  }, 1000 / 60);
  
  $(document).keydown(function(e){
    switch(e.keyCode){
      case 37: // izquierda
        game.player.move(-1);
        break;
        case 39: // derecha
        game.player.move(1);
        break;
    }
  });

  $(document).keyup(function(e){
    switch(e.keyCode){
      case 37: // izquierda
        game.player.move(0);
        break;
        case 39: // derecha
        game.player.move(0);
        break;
    }
  });

};

