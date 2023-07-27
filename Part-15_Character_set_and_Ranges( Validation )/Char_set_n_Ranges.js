console.log('Character Set and Ranges');

// var regEx = /[abc]das/;
// var regEx = /[a-z]das/;
// var regEx = /[a-z, A-Z, 1-99]das/;
// var regEx = /[^abc]das/; // ^ = here it means can't use this(abc);
// var str1 = "He is ABdas"
// const output = regEx.test(str1);
// console.log(output);

// Real validation example📍


function employee(){
    var idValue = document.getElementById("eid").value
    console.log(idValue);
    // var regEx = /[DE]253[0-9]{3}$/;
    var regEx = /^[D-E]253[0-9]{3}$/;
    // var regEx = /^[1-9]{10}$/;
    // ^[0-9]{1,12}\.[0-9]{2}$
    if (regEx.test(idValue)){
        console.log("Okay, Valid Employee Id.");
        alert('Okay, Valid Employee Id.')
    }else{
        console.log("This is not Valid id");
        alert('This is not Valid id')
    }
    console.log("Submit Clicking");
}

// D25311 E25361
//3:1:30second