                              //day-7 /task-7
                              //Q-1
//*
//* * 
//* * *
//* * * *                              
function PSR(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = "";
        for (let col = 1; col <= row; col++) {
            pattern += "*"; // Append '*' to the pattern string
        }
        console.log(pattern); // Print the pattern after constructing it
    }
}

// Example usage
const numberOfRows = 5;
PSR(numberOfRows);

//Q-2
//* * * *
//* * * *
//* * * *
//* * * *
function PSR(n, rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = "";
        for (let col = 1; col <= n; col++) {
            pattern += "*"; 
        }
        console.log(pattern); 
    }
}
PSR(4, 5);

//Q-3
//* * * *
//* * * 
//* * 
//* 
function PSR(n) {
    for (let row = n; row >= 1; row--) {
        let pattern = "";
        for (let col = 1; col <= row; col++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

// Example usage
PSR(4);

//                          Q-4
//  * * * *
//    * * *
//      * *
//        *

function PSR(n) {
    for (let row = n; row >= 1; row--) {
        let pattern = '';
        
        for (let i = 1; i <= n - row; i++) {
            pattern += ' ';
        }
        for (let i = 1; i <= row; i++) {
            pattern += '*';
            if (i < row) { 
                pattern += '';
            }
        }
        
        console.log(pattern);
    }
}
PSR(5);

//Q-5
//      *
//    * *
//  * * *
//* * * *
function PSR(n) {
    for (let row = 1; row <= n; row++) {
        let pattern = '';
        for (let col = 1; col <= n; col++) {
            
            pattern += (col <= n - row) ? ' ' : '*';
            pattern += (col > n - row && col < n) ? ' ' : ' ';
        }
        
        console.log(pattern.trimEnd()); 
    }
}
PSR(4);