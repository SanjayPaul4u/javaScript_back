console.log("Generator in JavaScript");

function* generate(){
    // yield "Sanjay",
    // yield "Chandan",
    // yield "Suman",
    // yield "Sekhar"
    let arr = ["Sanjay", "Chandan", "Suman", "Sekhar"];
    let i = 0;
    while (i<arr.length) {
        yield arr[i];
        i++;
    }
}

let gen = generate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function click(){
   let newGen = gen.next();
   console.log(newGen);
}
//write in console = click();