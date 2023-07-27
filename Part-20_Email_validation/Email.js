console.log("We are doning mobile validation.");
function emailSubmit(){
    var email = document.getElementById("Email").value
    var regex = /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+)\.([a-z A-Z]{2,6})(\.[a-z A-Z]{2,6})?$/ // by me 

    if(email==""){
        alert("Email id is missing");
    }else if(regex.test(email)){        
        // document.getElementById("Email").value= "";          
        alert("Perfect! Email id submited successfully");
    }else{
        alert("Wrong Email Id");
    }
}

// mobile number should start 7,8,9 and must be ten digit
// 4:3:00 simply code