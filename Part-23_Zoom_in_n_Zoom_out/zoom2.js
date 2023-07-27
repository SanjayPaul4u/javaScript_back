var width = 100;
var addition = 2;
var intervalId = 0;
console.log(width);

function zoomin(){
    clearInterval(intervalId);
    intervalId = setInterval(increase, 10);
    // console.log(intervalId);
}
function zoomout(){
    clearInterval(intervalId);
    // console.log(intervalId);
    intervalId = setInterval(decrease, 10);

}


function increase(){
    if(width<200){
        width = width+addition;
        document.getElementById("imgId").style.width = `${width}px`;
        // console.log(width);
    }else{
        clearInterval(intervalId);
    console.log(intervalId);

    }
}
function decrease(){
    if(width>100){
        width = width-addition;
        document.getElementById("imgId").style.width = `${width}px`;
        // console.log(width);
    }else{
        clearInterval(intervalId);
    console.log(intervalId);

    }
}
// 4:39:00 _________ simplycode