let game = document.getElementById("game");
let redCar = document.getElementById("redCar");
let blueCar = document.getElementById("blueCar");
let result = document.getElementById("result");
let text = document.getElementById("text");
var counter = 0;
// CREATING RANDOM RED CAR  
redCar.addEventListener('animationiteration', ()=>{
    let random = ((Math.floor(Math.random()*3))*200);
    redCar.style.left = random+"px";
    counter++;
})

// CREATING MOVEABLE BLUE CAR
window.addEventListener('keydown', moveBlueCar);
function moveBlueCar(e){
    let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'));
    if(e.keyCode == '39'){
        if(blueCarLeft<400){
            blueCar.style.left = (blueCarLeft+200)+'px';
        }
    }
    if(e.keyCode == '37'){
        if(blueCarLeft>0){
            blueCar.style.left = (blueCarLeft-200)+'px';
        }
    }

}

// MAIN RULES FOR GAME OVER
let gaveOver = setInterval(() => {
    let redCarTop = parseInt(window.getComputedStyle(redCar).getPropertyValue('top'));
    let redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue('left'));
    let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'));

    if((redCarTop>400) && (redCarTop<650) && (redCarLeft===blueCarLeft)){
        game.style.display = 'none';
        result.style.display = 'block';
        text.innerHTML= `Your Point is: ${counter}`
    }

}, 10);