console.log("This is just checking");

function fadein(){
    document.getElementById("imgId").style.opacity = 0.3;
    document.getElementById("imgId").style.transition = "all 0.5s linear";
}
function fadeout(){
    document.getElementById("imgId").style.opacity = 1;
}