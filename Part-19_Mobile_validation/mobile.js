console.log("We are doning mobile validation.");
function function123(){
    var mobile = document.getElementById("mobile").value
    // var regex = /^[789]{1}[0-9]{9}$/ // by me 
    // var regex = /[7-9]\d{9}/ // by simply code 
    var regex = /^[7-9]\d{9}$/ // by simply code

    if(mobile==""){
        alert("Mobile Number is missing");
    }else if(regex.test(mobile)){        
        document.getElementById("mobile").value= "";          
        alert("Perfect! Mobile number submited successfully");
    }else{
        alert("Wrong mobile number");
    }
}

// mobile number should start 7,8,9 and must be ten digit