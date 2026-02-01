console.log("Running tests...");
/* This code snippet is setting up tests for three different mathematical operations: addition,
subtraction, and multiplication. */
const sum =require('./sum');
test ('the sum of 2 numbers',()=>{
    expect (sum(5,7)).toBe(12);
})
const subtract =require('./subtract');
test ('the subtraction of 2 numbers',()=>{
    expect (subtract(10,4)).toBe(6);
})
const multiply =require('./multiply');
test ('the multiplication of 2 numbers',()=>{
    expect (multiply(10,4)).toBe(40);
})

/* This code snippet is setting up a test for the `cloneArray` function. It creates an array `arr` with
values `[1, 2, 3, 4, 5]`, then it calls the `cloneArray` function with `arr` as an argument. The
test expects that the result of `cloneArray(arr)` is not the same object reference as `arr` itself,
indicating that the `cloneArray` function creates a new copy of the array rather than modifying the
original array in place. */
const cloneArray=require('./cloneArray');
test('cloning an array',()=>{
    const arr=[1,2,3,4,5];
    expect (cloneArray(arr)).not.toBe(arr);
})
/* The code snippet you provided is setting up a test for the `mdas` function. It requires the `mdas`
function from a file named `mdas.js`. The test itself is calling the `mdas` function with arguments
`(2, 3, 10, 4, 2)` and expects the result to be `9`. This test is verifying that the `mdas` function
behaves as expected when given these specific input values. */

const mdas =require('./mdas');
test('testing mdas function',()=>{
    expect (mdas(2,3,10,4,2)).toBe(9);
})
/* The code snippet you provided is setting up a test for the `comparenumbers` function. It requires
the `comparenumbers` function from a file named `greaterorless.js`. */
const comparenumbers=require('./greaterorless');
test ('comparing two numbers',()=>{
    expect (comparenumbers(8,5)).toBe(8);
    expect (comparenumbers(8,15)).toBe(15);
    expect (comparenumbers(7,7)).toBe("equal")
})

const fizzbuzz=require('./fizzbuzz');
test ("if the argument is divisible by 3 and 5 return to fizzbuzz",()=>{
    expect (fizzbuzz(15)).toBe("fizzbuzz");
})
test ("if the argument is divisible by 3 return to fizz",()=>{
    expect (fizzbuzz(9)).toBe("fizz");
})
test ("if the argument is divisible by 5 return to buzz",()=>{
    expect (fizzbuzz(5)).toBe("buzz");
})
test ("if the arguments is not divisible by 3 and 5 return the number",()=>{
    expect (fizzbuzz(7)).toBe(7);
})