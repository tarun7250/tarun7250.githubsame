function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];
  this.test=1;
  this.automate=0;
  var xn,xp,yn,yp;
  var minp = 500;
  var minn = 500;

  

  this.draw = function() {
    ctx.fillStyle = "white";
    for (let i=0; i<this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.tail[i].x,this.tail[i].y,scale,scale);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {

  if(this.test==0){}
  else{
    for (let i=0; i<this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total - 1] =
      { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x == canvas.width &&  this.xSpeed > 0) {
      this.x = 0 ;
    }

    if (this.y == canvas.height &&  this.ySpeed > 0) {
      this.y = 0 ;
    }

    if (this.x < 0 ) {
      this.x = canvas.width - scale;
    }

    if (this.y < 0 ) {
      this.y = canvas.height - scale;
    }

    /*automate here*/
    if(this.automate==1){
    xp=0;
      xn=0;
      yp=0;
      yn=0;
      for (var i=0; i<this.tail.length; i++) {
        if (this.x+scale === this.tail[i].x &&
          this.y === this.tail[i].y) {
          xp=1;
        }
        if (this.x-scale === this.tail[i].x &&
          this.y === this.tail[i].y) {
          xn=1;
        }
        if (this.y+scale === this.tail[i].y &&
          this.x === this.tail[i].x) {
          yp=1;
        }
        if (this.y-scale === this.tail[i].y &&
          this.x === this.tail[i].x) {
          yn=1;
        }
      }
      

      if((xn==1 && xp==1 && yp==0 && yn==0)||(yn==1 && yp==1 && xp==0 && xn==0)){
        minn = 500;
        minp = 500;
        if(xn==1 && xp==1 && yp==0 && yn==0){

          for (let i=0; i<this.tail.length - 1; i++){
            if(this.x == this.tail[i].x){

              if(this.tail[i].y > this.y){

                if(minp > this.tail[i].y - this.y){
                  minp = this.tail[i].y - this.y;
                }

              }
              else if(this.tail[i].y < this.y){

                if(minn >  this.y - this.tail[i].y){
                  minn =  this.y - this.tail[i].y;
                }

              }
            }

          }
          if(minp == minn){
            if(fruit.y > this.y){
              this.ySpeed = scale * 1;
              this.xSpeed = 0;
            }
            else{
              this.ySpeed = scale * (-1);
              this.xSpeed = 0;
            }
          }
          else if(minp < minn){    
            this.ySpeed = scale * (-1);
            this.xSpeed = 0;
          }
          else if(minn < minp){
            this.ySpeed = scale * 1;
            this.xSpeed = 0;
          }

        }
        else{

          for (let i=0; i<this.tail.length - 1; i++){
            if(this.y == this.tail[i].y){

              if(this.tail[i].x > this.x){

                if(minp > this.tail[i].x - this.x){
                  minp = this.tail[i].x - this.x;
                }

              }
              else if(this.tail[i].x < this.x){

                if(minn >  this.x - this.tail[i].x){
                  minn =  this.x - this.tail[i].x;
                }

              }

            }

          }
          if(minp == minn){
            if(fruit.x > this.x){
              this.xSpeed = scale * 1;
              this.ySpeed = 0;
            }
            else{
              this.xSpeed = scale * (-1);
              this.ySpeed = 0;
            }
          }
          else if(minp < minn){    
            this.xSpeed = scale * (-1);
            this.ySpeed = 0;
          }
          else if(minn < minp){
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
          }
        }

      }


      else{
      if(fruit.x>this.x)
      {
        if(xp==0)
        {
          this.xSpeed = scale*1;
          this.ySpeed = 0;
        }
        else if(yp==0)
        {
          this.ySpeed = scale*1;
          this.xSpeed = 0;
        }
        else if(yn==0)
        {
          this.ySpeed = scale*(-1);
          this.xSpeed = 0;
        }
        else if(xn==0)
        {
          this.xSpeed = scale*(-1);
          this.ySpeed = 0;
        }
      }
      else if(fruit.x<this.x)
      {
        if(xn==0)
        {
          this.xSpeed = scale*(-1);
          this.ySpeed = 0;
        }
        else if(yp==0)
        {
          this.ySpeed = scale*1;
          this.xSpeed = 0;
        }
        else if(yn==0)
        {
          this.ySpeed = scale*(-1);
          this.xSpeed = 0;
        }
        else if(xp==0)
        {
          this.xSpeed = scale*1;
          this.ySpeed = 0;
        }
      }
      else if(fruit.y<this.y)
      {
        if(yn==0)
        {
          this.ySpeed = scale*(-1);
          this.xSpeed = 0;
        }
        else if(xp==0)
        {
          this.xSpeed = scale*1;
          this.ySpeed = 0;
        }
        else if(xn==0)
        {
          this.xSpeed = scale*(-1);
          this.ySpeed = 0;
        }
        else if(yp==0)
        {
          this.ySpeed = scale*1;
          this.xSpeed = 0;
        }
      }
      else if(fruit.y>this.y)
      {
        if(yp==0)
        {
          this.ySpeed = scale*1;
          this.xSpeed = 0;
        }
        else if(xp==0)
        {
          this.xSpeed = scale*1;
          this.ySpeed = 0;
        }
        else if(xn==0)
        {
          this.xSpeed = scale*(-1);
          this.ySpeed = 0;
        }
        else if(yn==0)
        {
          this.ySpeed = scale*(-1);
          this.xSpeed = 0;
        }
      }
    }
    }

  }
  }
  
  this.changeDirection = function(direction) {
    
    if(this.automate==0){
      
    switch(direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }
  else{ }
  }
  

  

  

  this.eat = function(fruit) {
    if (this.x === fruit.x &&
      this.y === fruit.y) {
      this.total++;
      return true;
    }

    return false;
  }

  this.checkCollision = function() {
    for (var i=0; i<this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
        /*this.total = 0;
        this.tail = [];*/
        this.test = 0;
        
      }
    }
  }
}
