function Fruit() {
  this.x;
  this.y;
  let image = new Image();
  image.src = "food.png";

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *columns - 1) + 1) * scale ;
    this.y = (Math.floor(Math.random() *rows - 1) + 1) * scale ;
  }

  this.draw = function() {

    ctx.drawImage(image,this.x,this.y,scale,scale);
    /*ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, scale, scale)*/
  }
}
