// DAY-8/TASK-8
//DESCENDING ORDER:-
// VAR a =[6,4,7,2,5]

let arr = [6, 4, 7, 2, 5];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);


//Q-2
//a=[3,9,8,1,2]
var a = [3,9,8,1,2]
function fmm(arr){
    var min = arr[0]
    var max = arr[0]
    for(var i=1; i<arr.length;i++){
        min=arr[i]<min?arr[i]:min;
        max=arr[i]>max?arr[i]:max;
    }
    return {min:min,max:max};
}
var result= fmm(a)
console.log(result.min);
console.log(result.max);

//Q-3
var a = [3, 2, 5, 4];

function SumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var total = SumArray(a);
console.log(`Sum of the array: ${total}`);


//Q-4
//    *    
//   * *   
//  * * *  
// * * * * 
//* * * * *
function psg(rows) {
    for (let i = 0; i < rows; i++) {
        let line = '';
        
        for (let j = 0; j < 2 * rows - 1; j++) {

            if (j < rows - i - 1 || j > rows + i - 1) {
                line += ' ';
            } else {
                line += (j % 2 === (rows - i - 1) % 2) ? '*' : ' ';
            }
        }
        
        console.log(line);
    }
}

psg(5);