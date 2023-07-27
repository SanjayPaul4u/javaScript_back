console.log('Short Hand Character Class in JS');
// 📍/d= backslace d is for fiding any other  one digit
// /d+ = backslace d+ is for fiding any other multiple digit
// d's opsit is capital D
// 📍/D = D is for alphabate, special character not digit
// /D+ = D+ is for More alphabate, special charactert not DIGIT

// 📍/w  = w return character and digit, _ only not any symble and special character
// /w+  = w+ return more character and digit only not any symble and special character

// 📍/W  = capital W is return only simble not any alphabate, digit
// /W  = capital W is return only  more simble not any alphabate, digit

// 📍/s = is for single space not other thing
// /s+ = is for more space not other thing

// 📍/S = is for not any single space(before any character any othre character required)
// /S+ = is for not any more space



// var regEx = /\d7845/;
// var regEx = /\d7845\d/;
// var str1 = "Users phone number is: 9064784593";

// var regEx = /\D+7845\D+/;
// var str1 = "Users phone number is: 906a$%%^&W_7845as3";

// var regEx = /\wber/;
// var regEx = /\w+ber/;
// var str1 = "Users phone num123ber is: 9064784593";
// var str1 = "Users phone num_ber is: 9064784593";

// var regEx = /\Wber/;
// var regEx = /\W+ber/;
// var str1 = "Users phone #%^*ber is: 9067845as3";

// var regEx = /\snumber/;
// var regEx = /\s+users/i;
// var str1 = "    Users phone number is: 9067845as3";

var regEx = /\SUsers/;
// var regEx = /\S+Users/;
var str1 = " aUsers phone number is: 9067845as3";
// var str1 = "    1252Users phone number is: 9067845as3";
// var str1 = "    %^&%^AA%$%Users phone number is: 9067845as3";




var output = regEx.exec(str1);
console.log(output);

// 3:17 simply code