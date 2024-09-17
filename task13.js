// FIND 3rd Max & 3rd min NUMBER WITHOUT SORTING
// a = [5,1,2,6,8,7]
// function findKthMaxMin(arr, k) {
//     function findKthMax(arr, k) {
//         let maxValues = new Set();
//         let currentMax;

//         for (let i = 0; i < k; i++) {
//             currentMax = null;
//             for (let num of arr) {
//                 currentMax = (currentMax === null || (num > currentMax && !maxValues.has(num))) 
//                              ? num 
//                              : currentMax;
//             }
//             maxValues.add(currentMax);
//         }
//         return currentMax;
//     }

//     function findKthMin(arr, k) {
//         let minValues = new Set();
//         let currentMin;

//         for (let i = 0; i < k; i++) {
//             currentMin = null;
//             for (let num of arr) {
//                 currentMin = (currentMin === null || (num < currentMin && !minValues.has(num))) 
//                              ? num 
//                              : currentMin;
//             }
//             minValues.add(currentMin);
//         }
//         return currentMin;
//     }
//     const thirdMax = findKthMax(arr, k);
//     const thirdMin = findKthMin(arr, k);
    
//     return { thirdMax, thirdMin };
// }
// const a = [5, 1, 2, 6, 8, 7];
// const { thirdMax, thirdMin } = findKthMaxMin(a, 3);
// console.log("Third Max:", thirdMax);
// console.log("Third Min:", thirdMin);


//Q-2
//SWAPPING WITHOUT USING TEMP & DON'T DECLARE ANY VARIABLE
// var a = 8;
// var b = 9;
// var a = 8;
// var b = 9;

// a = a + b;  
// b = a - b;  
// a = a - b;  

// console.log("a:", a); 
// console.log("b:", b);  

Q-3          
  

function PHP (n){
    for (let i=1;i<=n; i++){
        let row ='';
        for (j=1; j<=n;j++){
            row += (j<=n-i)?' ':'';
        }
        for (let j=1; j<=i;j++){
            row+=(j===1||j===i||i===n)?'* ' :'  ';
        }
        console.log(row);
        
    }

}
PHP(4)