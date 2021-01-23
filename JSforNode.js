// JS is dynamically typed language
let i
i = 0 // number
console.log(i) // 0
i = "JS is fun" // string
console.log(i) // JS is fun

var k
k = 10;
console.log(k) // 10

const x = 20
try {
    x = 30 // will cause an error
} catch (e) {
    console.log(e.message) // Assignment to constant variable.
}
// This means, variable can be assigned with values of any data type, not just with the one it was initialized with.


// Differences between let and var

{ // new block of code.
    let letVariable = 10
    var varVariable = 20
}

try {
    console.log(varVariable) // 20
    console.log(letVariable) // will cause an error
} catch (e) {
    console.log(e.message) // letVariable is not defined
}



try {
    console.log(variableDeclaredAfterwards) // Doesn't throw error. Prints undefined instead.
    var variableDeclaredAfterwards = 10
    console.log(variableInNextLine) // Throws error. Cannot access 'variableInNextLine' before initialization
    let variableInNextLine = 20
} catch (e) {
    console.log(e.message)
}
// This means that scope of let is only in the current block whereas var has scope even outside of its block.
// Also, variables declared with var are hoisted. This means, initialized with undefined before the code is run. That's why, they gives undefined before declaring them.
// But, let variables can be used only after they are declared.

// Ways to declare string
let string1 = 'string'
let string2 = `string`
let string3 = "string"

// String interpolation
let stringInterpolation = `You can insert any expression in curly braces which is after a dollar sign, for example 2+3 = ${2+3}`
console.log(stringInterpolation)
// You can also use variables too in place of expression
let stringOne = `1`
let stringTwo = `String ${stringOne}`
console.log(stringTwo)
// Remember to use backticks (``) only for string interpolation. Single/ Double quoates won't work




// Arrays in JS
// Arrays in JS can grow dynamically, and can contain values of any datatype irrespective of datatypes of other values in the array.
let array = []
array.push(10)
array.push("JS array")
console.log(array)



// JS equal operators
let firstVariable = 10
let secondVariable = "10"

console.log(firstVariable == secondVariable) // true
console.log(firstVariable === secondVariable) // false
secondVariable = 10
console.log(firstVariable === secondVariable) // true
secondVariable = "10"
console.log(firstVariable === +secondVariable) // true
// JS has two equal operators: == and ===
// == means it will convert both sides to same data type and then will match their equivalance
// === will directly check if both sides are equal or not.
// unary plus (+) operator can convert the numbers in string datatype to number datatype


function fn1() {
    console.log('JS Function 1')
}

console.log(fn1()) // not returning anything
console.log(fn2()) // Returning a number

function fn2() {
    console.log('JS Function 2')
    return 2
}


// Hoisting is a JavaScript technique which moves variables and function declarations to the top of their scope before code execution begins.
// Within a scope no matter where functions or variables are declared, they're moved to the top of their scope.
// Note that hoisting only moves the declaration while assignments are left in place.


// Array methods
let beforeFiltering = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let afterFiltering = beforeFiltering.filter((val) => val % 2 === 0)
console.log(afterFiltering)