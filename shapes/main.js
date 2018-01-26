window.onload = function () {

  var game = new Game();

  setInterval(function() {
    //console.log(game.obstaclePosition)
      game.update();
  }, 1000 / 60);
  
  $(document).keydown(function(e){
    switch(e.keyCode){
      case 37: // izquierda
        game.player.move(e.keyCode);
        break;
        case 39: // derecha
        game.player.move(e.keyCode);
        break;
    }
  });

};

