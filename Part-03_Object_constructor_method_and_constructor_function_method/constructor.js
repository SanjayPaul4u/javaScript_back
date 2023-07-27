// var obj_name = new Object();

//📌📌📌 Object constructor method by parameter()
// var rect1 = new Object(); // var rect1 = {};
// rect1.length = 5;
// rect1.width = 7;

// rect1.getarea = function(){
//     return this.length*this.width;
// }
// rect1.rectParameter = function(){
//     return 2*this.length+2*this.width;
// }

// document.write("<h2>"+"The length of the rect1 is: "+rect1.length+"</h2>");
// document.write("<h2>"+"The width of the rect1 is: "+rect1.width+"</h2>");
// document.write("<h2>"+"The rectParamiter is: "+rect1.getarea()+"</h2>");
// document.write("<h2>"+"The rectArea is: "+rect1.rectParameter()+"</h2>");

//📌📌📌constructor function method
function rect2(len, wid){
    this.length = len;
    this.width = wid;
    this.getarea = function(){
        return len*wid;
    }
    this.getparameter = function(){
        return 2*len+2*wid;
    }
}

var r1 = new rect2(5,1)
document.write("<h2>"+"The length of the rect1 is: "+r1.length+"</h2>");
document.write("<h2>"+"The width of the rect1 is: "+r1.width+"</h2>");
document.write("<h2>"+"The rectParamiter is: "+r1.getarea()+"</h2>");
document.write("<h2>"+"The rectArea is: "+r1.getparameter()+"</h2>");

var r1 = new rect2(10,40)
document.write("<h2>"+"The length of the rect1 is: "+r1.length+"</h2>");
document.write("<h2>"+"The width of the rect1 is: "+r1.width+"</h2>");
document.write("<h2>"+"The rectParamiter is: "+r1.getarea()+"</h2>");
document.write("<h2>"+"The rectArea is: "+r1.getparameter()+"</h2>");

//25:00:simplycode