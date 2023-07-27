
let image = document.getElementById("img123");
let boxes = document.getElementsByClassName("box");

image.addEventListener("dragstart", dragStart);
image.addEventListener("dragend", dragEnd);

// for of loop for getting box from box class
for (const box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', Drop);    
}
// function
function dragStart(){
    // console.log("dragStart");
    setTimeout(() => {
        this.className ="invisible";
    }, 0);
}
// function
function dragEnd(){
    // console.log("dragEnd");
    this.className ="image";
}



// function
function dragOver(e){
    // console.log("dragOver");
    e.preventDefault();
}
// function
function dragEnter(e){
    // console.log("dragEnter");
    e.preventDefault();
}
// function
function dragLeave(e){
    // console.log("dragLeave");
    e.preventDefault();
}
// function
function Drop(){
    // console.log("drop");
    this.className = "box";
    this.append(image);
}

// 6 hours- simply code
