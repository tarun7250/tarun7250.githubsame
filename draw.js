const canvas = document.querySelector(".canvas");
const button = document.querySelector(".button");
const auto = document.querySelector(".button1");
const buttonup = document.querySelector(".buttonup");
const buttondown = document.querySelector(".buttondown");
const startbutton = document.querySelector(".startbutton");
const starting = document.querySelector(".starting");
const score = document.querySelector(".score");
const instructions = document.querySelector(".instructions");
const instru = document.querySelector(".instru");
const back = document.querySelector(".back");

var audio = document.getElementById("audio");

const ctx = canvas.getContext("2d");
const scale = 15;
const rows = canvas.height  / scale;
const columns = canvas.width / scale;
var snake;
var speed=250;
var updation;


  canvas.style.display="none";
  button.style.display="none";
  buttonup.style.display="none";
  buttondown.style.display="none";
  auto.style.display="none";
  score.style.display="none";
  instructions.style.display="none";




(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();


  updation = setInterval(start,speed);

  function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();
    if(snake.test == 0) {
      document.querySelector('.score')
        .innerText = "your score: "+snake.tail.length+"\n game over";

    }
    else {
      document.querySelector('.score')
        .innerText = snake.total;
    }

    

  }

  startbutton.onclick = function() {
    audio.play();
    canvas.style.display="block";
    button.style.display="block";
    buttonup.style.display="block";
    buttondown.style.display="block";
    starting.style.display="none";
    auto.style.display="block";
    score.style.display="block";
  }

  auto.onclick = function() {
    audio.play();
    snake.automate=1;
  }

  button.onclick = function(){
    audio.play();
    snake.test=1;
    snake.automate=0;
    snake.total = 0;
    snake.tail = [];
  }
  buttonup.onclick = function(){
    audio.play();
    clearInterval(updation);
    speed = speed / 2;
    updation = setInterval(start,speed);
    
  }
  buttondown.onclick = function(){
    audio.play();
    clearInterval(updation);
    speed = speed * 2;
    updation = setInterval(start,speed);
    
  }
  instru.onclick = function(){
    audio.play();
    instructions.style.display="block";
    instru.style.display="none";
    startbutton.style.display="none";

  }
  back.onclick = function(){
    audio.play();
    instructions.style.display="none";
    instru.style.display="block";
    startbutton.style.display="block";
  }

  



  window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
  }));
  

  //touching start

  function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 80, 
    restraint = 50, 
    allowedTime = 400, 
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() 
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() 
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX 
        distY = touchobj.pageY - startY 
        elapsedTime = new Date().getTime() - startTime 
        if (elapsedTime <= allowedTime){ 
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ 
                swipedir = (distX < 0)? 'left' : 'right' 
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ 
                swipedir = (distY < 0)? 'up' : 'down' 
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  

var el = document.querySelector(".canvas")
swipedetect(el, function(swipedir){
    if (swipedir =='left')
    snake.changeDirection('Left')
        if (swipedir =='right')
        snake.changeDirection('Right')
        if (swipedir =='up')
        snake.changeDirection('Up')
        if (swipedir =='down')
        snake.changeDirection('Down');
})





  //touching ends

  
}());
  

