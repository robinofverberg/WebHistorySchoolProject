function move(e) {
    var position = $(e).position();
    
    var width = $(".bigContainer").width();
    var height = $(".bigContainer").height();
  
  width = width - (width * 0.04);
  height = height - (height * 0.1);
    
    var newPos = new function() {
      this.left;
      this.top;
    };
  
    newPos.left = chooseSide(position.left, width);
    newPos.top = chooseSide(position.top, height);
    $(e).animate({
      "top": newPos.top + "px",
      "left": newPos.left + "px"
    }, 500);
  }
  
  function chooseSide(pos, size) {
    do {
      var random = (Math.random() * size);
    } while ((Math.abs(pos - random)) <= (size * 0.1));
  
    return random;
  }