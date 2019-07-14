// Let Keyword
//console.log(numValue); // Block-scoped variable 'numValue' used before its declaration.
var numValue = 20; // Valid Javascript
console.log(numValue);
//numValue = "Hello Javascritp"; // Compile Time Error
//console.log(numValue);
var numValueTypescript; // typescript
numValueTypescript = 30;
console.log(numValueTypescript);
// Compile time Error
// Type '"Hello Typescript"' is not assignable to type 'number'.
//numValueTypescript = "Hello Typescript";
// Var Keyword
console.log(varNumValue); // undefined
var varNumValue = 40;
console.log(varNumValue);
//console.log(numLocalValue); // Cannot find name 'numLocalValue'
{
    // let Local Variable
    var numLocalValue = 50;
    console.log(numLocalValue);
    // Access let Global Variable
    console.log(numValue);
    // Access Var Global Variable
    console.log(varNumValue);
    // var local Variable
    console.log(varLocalValue);
    var varLocalValue = 60;
    console.log(varLocalValue);
}
//console.log(numLocalValue); // Cannot find name 'numLocalValue'
