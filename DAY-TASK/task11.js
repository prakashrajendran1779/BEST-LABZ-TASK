//       //Q1
//       //FIND MAX VALUE WITHOUT SORTING

// var a = [2,5,1,3,8,9];
// function findmax(arr){
//     if(arr.length === 0){
//         return"array is empty"
//     }
//     var max = arr[0];
//     for (var i=1; i<arr.length; i++){
//       max= (arr[i]> max)?arr[i]:max;

//     }
//     return max;
//     }
//     console.log(findmax(a));
    
//Q-2
//I/P:a=["a","a","c","d","c","a","b"] IN THIS ARRAY HOW MANY SAME CHARACTERS ARE REPEATED: WRITE THE CODE OF THIS: 
// const array = ["a", "a", "c", "d", "c", "a", "b"];
// const charCount = {};

// for (let i = 0; i < array.length; i++) {
//     const char = array[i];
//     charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
// }

// for (const char in charCount) {
//     console.log(`${char} occurs ${charCount[char]} times`);
// }


//Q-3
// FIND MAX & MIN NUM WITHOUT SORTING
// a=[5,1,2,6,8]
// const a = [5, 1, 2, 6, 8];

// function findMaxMin(arr) {
//     if (arr.length === 0) {
//         return { max: null, min: null }; 
//     }

//     let max = arr[0];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     return { max, min };
// }

// const { max, min } = findMaxMin(a);
// console.log(`Max: ${max}`);
// console.log(`Min: ${min}`);
