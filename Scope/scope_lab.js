// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);

/*
function show() {
    var functionVar = "Block-scoped var"
    let functionLet = "Block-scoped let"
    const functionConst = "Block-scoped const"
}

show()
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
*/

{
    let var1 = 32
    const var2 = 34
    var var3 = 'check'
    console.log('var1 value', var1)
    console.log('var2 value', var2)
    console.log('var3 value', var3)

    console.log('Assigning in block')

    console.log('assigning var1')

    var1 = 2
    console.log('var1 value', var1)

    console.log('assigning var2')

    //var2 = 4

    console.log('assigning var3')
    var3 = 5
    console.log('var3 value', var3)

}
console.log('Assigning outside block')

console.log('assigning var1')
var1 += 2
console.log('var1 value', var1)

console.log('assigning var2, this actually works also outside scope, gets redfined?')
var2 = 44
console.log('var2 value', var2)

console.log('assigning var3')
var3 = 55
console.log('var3 value', var3)
