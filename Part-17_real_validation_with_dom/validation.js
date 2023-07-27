// console.log('Real validation with Dom');

const validate = () => {

var userName = document.getElementById("uname").value;
var password = document.getElementById("pass").value;
var age = document.getElementById("age").value;

// reguler Expression for validatioin📌
var regEx = /^[a-z, A-z]{3,10}$/
var name123 = regEx.test(userName);

var regEx2 = /^[0-9]{5}$/
var password123 = regEx2.test(password);

var regEx3 = /^[0-9]{2}$/
var age123 = regEx3.test(age);

// if else condition 📌
if(userName.trim()=="" || password.trim()==""|| age.trim()==""){
    alert("Credential is Missing");
    return false;
}else if(name123==true && password123== true &&  age123==true){
    alert("Sign up successfull");
    return true;

}else if(age<10){
    alert("Underaged");
    return false;

}else{
    alert("wrong id and password");
    return false;

}
};

// 3:33:00 simplycode



