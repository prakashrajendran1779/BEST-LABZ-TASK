// //a = [1, 6, 7, 4, 3, 8, 4] ADD THESE NUMBER &FIND AVERAGE

// function CSA(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
    
//     const avg = arr.length > 0 ? sum / arr.length : 0;
    
//     console.log(`Sum: ${sum}`);
//     console.log(`Average: ${avg}`);
// }
// const a = [1, 6, 7, 4, 3, 8, 4];
// CSA(a);

// //Q-2
// // fibonacci series write the code of this i/p: n= 10
// function Gf(n) {
//     if (n <= 0) {
//         console.log('Please enter a number greater than 0');
//         return [];
//     }
    
//     if (n === 1) return [0]; 

//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
    
//     return fib;
// }

// let result = Gf(10);
// console.log(result);


//I/P a = [3,4,3,6,4,4,6,8] IN THIS ARRAY HOW MANY SAME DIGITS ARE REPEATED WRITE THE CODE OS THIS:
function CEO(arr) {
    const elementCount = {};

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        elementCount[element] = elementCount[element] ? elementCount[element] + 1 : 1;
    }

    // Log occurrences of each element
    for (const element in elementCount) {
        console.log(`${element} occurs ${elementCount[element]} times`);
    }
}

const inputArray = [3, 4, 3, 6, 4, 4, 6, 8];
CEO(inputArray);
