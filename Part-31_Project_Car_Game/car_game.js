var game = document.getElementById("game");
var blueCar = document.getElementById("blueCarYel");
var redCar = document.getElementById("redCarBla");
var result = document.getElementById("result");
var scoreText = document.getElementById("scoreText");
var counter = 0;

//STEP 1: RANDOM MOVE BLUE CAR 3 POSITION 📌📌
blueCar.addEventListener('animationiteration', randomBlueCar);
function randomBlueCar(){
    let random = ((Math.floor(Math.random()*3))*130);
    // console.log(random);
    blueCar.style.left = random+'px';
    counter++;
}

// STEP 2: MOVE RED CAR 📌📌
window.addEventListener('keydown', moveRedCar);
function moveRedCar(e){
    if(e.keyCode=='39'){
        let redCar_Left = parseInt(window.getComputedStyle(redCarBla).getPropertyValue('left'));
        if(redCar_Left<260){
            redCarBla.style.left = (redCar_Left +130)+"px";
        }
    }
    if(e.keyCode=='37'){
        let redCar_Left = parseInt(window.getComputedStyle(redCarBla).getPropertyValue('left'));
        if(redCar_Left>0){
            redCarBla.style.left = (redCar_Left -130)+"px";
        }
    }
    // '39' represents right key in keyCode'
    // '37' represents left key in keyCode'
};

// STEP 3: GAME RULES MAKING FOR GAMEOVER 📌📌
setInterval(function gameOver() {
    var redCar_Left = parseInt(window.getComputedStyle(redCarBla).getPropertyValue('left'));
    var blueCar_Left = parseInt(window.getComputedStyle(blueCarYel).getPropertyValue('left'));
    var blueCar_Top = parseInt(window.getComputedStyle(blueCarYel).getPropertyValue('Top'));
    console.log(blueCar_Top);
    if((redCar_Left===blueCar_Left)&& (blueCar_Top>250) && (blueCar_Top<450)){
        result.style.display = 'block';
        game.style.display = 'none';
        scoreText.innerHTML = `Your Score is: ${counter}`;

        counter = 0;
    }
}, 10);


