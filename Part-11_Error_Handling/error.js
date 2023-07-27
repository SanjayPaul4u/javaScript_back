function makeOrder(){
    console.log("Watch the dom.");
    return "Here is your Black coffe, Enjoy your day"
}

try {
    document.write(`<h3>${makeOrder()}<h4/>`);

} catch (error) {
    document.write(`<h3>${error}<h4/>`);
}

const a =9;
if(a>=10){
    throw new Error("This is Customiseable Error");
}
else{
    console.log("Working Fine");
}