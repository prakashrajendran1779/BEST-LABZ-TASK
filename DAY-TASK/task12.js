// //                                                  Q-1
// * * * * *
//  * * * *
//   * * *
//    * *
//     *



// function PSR(row){
//     for (let i=0; i< row; i++){
//         let line ='';
//         const width =2 * row -1;
//         for (let j=0; j<width; j++){
//             line += (j<i||j>=width-i)?' ':(j% 2===(i%2)?'*':' ');

//         }
//         console.log(line);
//     }
// }
// PSR(6)

//Q-2


// function pd(n){
//     if (n<1){
//         console.log("please enter the positive number.");
//         return
//     }
//     for (let i=0; i<2*n-1; i++){
//         let line ='';
//         const isupperPart = i<n;
//         const spaces = isupperPart ? n-i-1 : i - n + 1;
//         const stars = isupperPart? i+1 : 2*n - i-1;
//         for (let s =0; s< spaces; s++){
//             line+= ' ';

//         }
//         for (let st=0;st<stars;st++){
//             line+= '* ';
//         }
//         console.log(line);
        

//     }

// }
// pd(4)

// (i)FIND 2ND MAX NUMBER WITHOUT SORTING
// a = [5,1,2,6,8,7]
// const a = [5, 1, 2, 6, 8, 7];

// function findSecondMax(arr) {
//     if (arr.length < 2) {
//         return null; 
//     }

//     let max = arr[0] > arr[1] ? arr[0] : arr[1];
//     let secondMax = arr[0] > arr[1] ? arr[1] : arr[0];

//     for (let i = 2; i < arr.length; i++) {
//         const num = arr[i];

//         max = num > max ? num : max;
//         secondMax = num < max && num > secondMax ? num : secondMax;
//     }
//     return secondMax === max ? null : secondMax;
// }

// const secondMax = findSecondMax(a);
// console.log(`Second Max: ${secondMax}`);



// FIND 2ND Min NUMBER WITHOUT SORTING
// a = [5,1,2,6,8,7]
const a = [5, 1, 2, 6, 8, 7];

function findSecondMin(arr) {
    if (arr.length < 2) {
        return null;
    }

    let min = arr[0] < arr[1] ? arr[0] : arr[1];
    let secondMin = arr[0] > arr[1] ? arr[0] : arr[1];

  
    for (let i = 2; i < arr.length; i++) {
        const num = arr[i];

        min = num < min ? num : min;
        secondMin = num > min && num < secondMin ? num : secondMin;
    }

    return secondMin === min ? null : secondMin;
}

const secondMin = findSecondMin(a);
console.log(`Second Min: ${secondMin}`);
