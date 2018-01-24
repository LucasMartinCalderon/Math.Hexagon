window.onload = function () {

  var game = new Game();
 
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

}