                                              //DAY-3/TASK
// SUM OF N DIGITS
var n=10 
var result = 0; 
for (var i=1;i <=n;i++){
    result = result + i ;
    console.log(result);   
}
                                              
//MULTIPLY OF N DIGITS
var n = 10; 
var product = 1; 
for (var i = 1; i <= n; i++) {
    product *= i; 
}
console.log('Product of numbers from 1 to', n, 'is:', product);

// SUM OF N TWO DIGITS EG: N = 123456=>12+34+56=102
function sumOfTwoDigitGroups(n) {
    const str = n.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i += 2) {
        const pair = str.substring(i, i + 2);
        sum += parseInt(pair, 10);
    }
    console.log('Sum of two-digit groups:', sum);
}
sumOfTwoDigitGroups(123456); // Output: 12 + 34 + 56 = 102

//multiply of n two digits
let n = 123456;
let nstr = n.toString();
let product = 1;
for (let i = 0; i < nstr.length; i += 2) {
    let pair = nstr.substring(i, i + 2);
    let num = parseInt(pair, 10);
    product *= num;
}
console.log(product);

//N FACTORIAL USING FOR LOOP =>ICREMENT TYPE=> N!=5!=>5*4*3*2*1=120
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result;
}
const n = 5;
console.log(`Factorial of ${n} is: ${factorial(n)}`); 

//N FACTORIAL USING FOR LOOP =>DECREMENT TYPE=> N!=5!=>5*4*3*2*1=120
function factorial(n) {
    let result = 1;

    for (let i = n; i >= 1; i--) {
        result *= i; 
    }

    return result;
}
const n = 5;
console.log(`Factorial of ${n} is: ${factorial(n)}`); 
