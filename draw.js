const canvas = document.querySelector(".canvas");
const button = document.querySelector(".button");
const auto = document.querySelector(".button1");
const buttonup = document.querySelector(".buttonup");
const buttondown = document.querySelector(".buttondown");
const startbutton = document.querySelector(".startbutton");
const starting = document.querySelector(".starting");
const score = document.querySelector(".score");

const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
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
        .innerText = "game over";

    }
    else {
      document.querySelector('.score')
        .innerText = snake.total;
    }

    

  }

  startbutton.onclick = function() {
    canvas.style.display="block";
    button.style.display="block";
    buttonup.style.display="block";
    buttondown.style.display="block";
    starting.style.display="none";
    auto.style.display="block";
    score.style.display="block";
  }

  auto.onclick = function() {
    snake.automate=1;
  }

  button.onclick = function(){
    snake.test=1;
    snake.automate=0;
  }
  buttonup.onclick = function(){
    clearInterval(updation);
    speed = speed / 2;
    updation = setInterval(start,speed);
    
  }
  buttondown.onclick = function(){
    clearInterval(updation);
    speed = speed * 2;
    updation = setInterval(start,speed);
    
  }

  
  window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
  }));
  




  
}());
  

