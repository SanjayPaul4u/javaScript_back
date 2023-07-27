console.log("check");
var ab = 2;
console.log(ab);

var Names = ["Sanjay", "Chandan", "Suman", "Sekhor", "Rahul"];

// iterator for Next function
var index = 0;
function nam(names){
    return{
        next: function(){
            if(index<names.length){
                console.log(index);
                return{
                    value: names[index++],
                    done:false,
                    num: index
                }
            }else{
                return{
                    done: true
                }
            }
            
        }
    }
}
const  newName = nam(Names);

// next function
function next(){
    var showing_div = document.getElementById("updateName");
    const nextName = newName.next();
    console.log(nextName);
    if(nextName.value!=undefined){
        showing_div.innerHTML=`<h1>${nextName.num}: ${nextName.value}</h1>`;        
    }else{
        alert("All name is end!")
        // window.location.reload();
    }

}


// iterator for previouse funciton
function nam2(names){ 
    return{
        previ: function(){
            if(index>0){
                return{
                    
                    value: names[--index-1],
                    done:false,
                    num: index
                }
            }else{
                return{
                    done: true
                }
            }
        }
    }
}
let preNewName = nam2(Names);

function previous(){
    var showing_div = document.getElementById("updateName");
   let  previousName = preNewName.previ();
   console.log(previousName);
   if(previousName.value!=undefined){
    showing_div.innerHTML=`<h1>${previousName.num}: ${previousName.value}</h1>`;        
}else{
    alert("All Previous come!")
    // window.location.reload();
}

}

next();

