// DAY-4/TASK-4
//POWER OF 2'S USING INCREMENT TYPE : EG:2^4
function powerOfTwo(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= 2; 
    }
    return result;
}
const n = 4;
console.log(`2^${n} is: ${powerOfTwo(n)}`); 

//POWER OF 2'S USING DECREMENT TYPE
function powerOfTwo(n) {
    if (n < 0) {
        return 'Exponent must be a non-negative integer';
    }
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= 2;
}
    return result;
}
const n = 4;
console.log(`2^${n} is: ${powerOfTwo(n)}`); 

//(i)POWER OF 2'S USING WHILE LOOP STATEMENT 
function powerOfTwoWhileLoop(n) {
    if (n < 0) {
        return 'Exponent must be a non-negative integer';
    }
    let result = 1;
    let i = 0;
       while (i < n) {
        result *= 2;
        i++;
    }
    return result;
}
const n1 = 4;
console.log(`2^${n1} is: ${powerOfTwoWhileLoop(n1)}`); 

//(ii)ANOTHER METHOD IN LOOP STATEMENT
function powerOfTwoDoWhileLoop(n) {
    if (n < 0) {
        return 'Exponent must be a non-negative integer';
    }
    let result = 1;
    let i = 0;
    do {
        result *= 2;
        i++;
    } while (i < n);

    return result;
}
const n2 = 4;
console.log(`2^${n2} is: ${powerOfTwoDoWhileLoop(n2)}`); 

//(iii)ONE ANOTHER METHOD IN LOOP
function powerOfTwoArrayReduce(n) {
    if (n < 0) {
        return 'Exponent must be a non-negative integer';
    }
    const arr = Array(n).fill(1);
    const result = arr.reduce(accumulator => accumulator * 2, 1);

    return result;
}
const n3 = 4;
console.log(`2^${n3} is: ${powerOfTwoArrayReduce(n3)}`); 
