



//Q-1
//****
//****
//####
//####

// let n=4;
// for (let i=1;i<=n;i++){
//     let char=(i%4 === 1||i%4===2)?'*':'#';
//     let line="";

// for (let j=0; j<n;j++){
//     line += char;     
// }
// console.log(line);
// }

//Q-2
// **##
// **##
// **##
// **##


// function PSR(n){
//     let pattern ="";
//     for (let i=0;i<n;i++){
//         if (i%4===0||i%4===1){
//             pattern+='*'
//         }else if (i%4===2||i%4===3){
//             pattern+='#';
//         }
//     }
//     for(let i=0;i<n;i++){
//         console.log(pattern);
//     }
// }
// PSR(4);
// console.log("")

//  Q = 3
// 1
// 12
// 123
// 1234
// var row =5
// for (var i=1; i<=row;i++){
//     var line='';
//     for (var j=1;j<=i; j++){
//         line+=(j)?j+'':'';
    
//     }
//     console.log(line.trimEnd());
// }

//Q-4
//     2
//    24
//   246
//  2468

//  var row = 4; 

// for (var i = 1; i <= row; i++) {
//     var line = '';
//     var currentnum = 2;
//     for (var k = 1; k <= row - i; k++) {
//         line += ' ';
//     }
//     for (var j = 1; j <= i; j++) {
//         line += currentnum;
//         currentnum += 2; 
//     }
//     console.log(line);
// }
