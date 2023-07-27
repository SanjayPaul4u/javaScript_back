let hole = document.getElementById("holeDiv");
let game = document.getElementById("gameDiv");
let result = document.getElementById("result");
let text = document.getElementById("text");

var score = 0;
var jumping = 0;
// CREATING RANDOM HOLE📌
hole.addEventListener('animationiteration', ranHole);
function ranHole(){
    let random = -(Math.floor((Math.random()*35)+15));
    // console.log(random);
    hole.style.top = random+"rem";
    score++;
}

var fall = setInterval(() => {
    // BIRD FALLING 📌
    var birdTop = parseInt(window.getComputedStyle(birdDiv).getPropertyValue("top"));
    if(jumping == 0){
        birdDiv.style.top = (birdTop+2)+'px';
    }

    //GENARATE RESULT CONTAINER & fLYING CONDITION📌📌
    var blockLeft = parseInt(window.getComputedStyle(blockDiv).getPropertyValue('left'));// 400px to -50px
    var holeTop = parseInt(window.getComputedStyle(holeDiv).getPropertyValue("top"))// -500px to -150px
    var h_top = (500+holeTop); //1px to 450px
    // console.log(birdTop); 

    if ((birdTop>450) || ((blockLeft<50) && (blockLeft> -50) && ((birdTop < h_top) || (birdTop>h_top+100)))){
        result.style.display = "block";
        text.innerHTML = `Your final score is ${score}`;
        game.style.display = 'none';
        // score = 0;
    }

}, 10);

// PRESS KEY AND BIRD WILL BE FLY📌
window.addEventListener('keydown', hop);
function hop(){
    jumping = 1;
    var birdTop = parseInt(window.getComputedStyle(birdDiv).getPropertyValue("top"));
    console.log(birdTop);
    if(birdTop>6){
        birdDiv.style.top = (birdTop - 60)+'px';
    }
    setTimeout(() => {
        jumping =0;
    }, 100);
}
