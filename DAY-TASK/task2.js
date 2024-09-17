                             //DAY-2/TASK-2
// PRINT A SINGLE DICE

function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${result}`);
}
rollDice();


// PRINT TWO DICE
function rollDice() {

    function rollSingleDie() {
        return Math.floor(Math.random() * 6) + 1;
    }
    const die1 = rollSingleDie();
    const die2 = rollSingleDie();
    console.log(`You rolled a ${die1} and a ${die2}`);
}
rollDice();

//ADD TWO DICE
function rollDice() {
    function rollSingleDie() {
        return Math.floor(Math.random() * 6) + 1;
    }
    const die1 = rollSingleDie();
    const die2 = rollSingleDie();
    const sum = die1 + die2;
    console.log(`You rolled a ${die1} and a ${die2}. The sum is ${sum}.`);
}
rollDice();

//PICK 5Random two digit number
function grg(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      
        const number = Math.floor(Math.random() * 90) + 10;
        numbers.push(number);
    }
    return numbers;
}
const randomNumbers = grg(5);
console.log('Random two-digit numbers:', randomNumbers);

//ADD 5Random two digit number & GET AVERAGE NUM (TOTAL =5)
const generateRandomTwoDigitNumbers = (count) => 
    Array.from({ length: count }, () => Math.floor(Math.random() * 90) + 10);
const calculateAverage = (numbers) => 
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const randomNumbers = generateRandomTwoDigitNumbers(5);
const average = calculateAverage(randomNumbers);
console.log('Random two-digit numbers:', randomNumbers);
console.log('Average:', average.toFixed(2)); 

//ADD 5Random THREE digit number & GET AVERAGE NUM (TOTAL =5)
const generateRandomThreeDigitNumbers = (count) => 
    Array.from({ length: count }, () => Math.floor(Math.random() * 900) + 100);

const calculateAverage = (numbers) => 
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const randomNumbers = generateRandomThreeDigitNumbers(5);
const average = calculateAverage(randomNumbers);

console.log('Random three-digit numbers:', randomNumbers);
console.log('Average:', average.toFixed(2)); 

//ADD 5 TWO DIGIT RANDOM NUMBER USING FOR LOOP => INCREMENT TYPE
function generateAndCalculateAverage() {
    const count = 5;
    const numbers = [];
    for (let i = 0; i < count; i++) {
       const number = Math.floor(Math.random() * 90) + 10;
        numbers.push(number);
    }
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;

  
    console.log('Random two-digit numbers:', numbers);
    console.log('Average:', average.toFixed(2));
}

generateAndCalculateAverage();


//ADD 5 TWO DIGIT RANDOM NUMBER USING FOR LOOP =>DECREMENT TYPE 

function generateAndCalculateAverage() { 
    const count = 5; 
    const numbers = []; 
    for (let i = count; i > 0; i--) { 
        const number = Math.floor(Math.random() * 90) + 10; 
        numbers.push(number); 
    } 
    const total = numbers.reduce((sum, num) => sum + num, 0); 
    const average = total / numbers.length; 
    console.log('Random two-digit numbers:', numbers); 
    console.log('Average:', average.toFixed(2));  
} 
generateAndCalculateAverage(); 

//MULTIPLY 5 TWO DIGIT RANDOM NUMBER USING FOR LOOP
function multiplyRandomTwoDigitNumbers() {
    const count = 5;
    let product = 1;
    for (let i = 0; i < count; i++) {
        const number = Math.floor(Math.random() * 90) + 10;
        product *= number;
    }
    console.log('Product of the random two-digit numbers:', product);
}
multiplyRandomTwoDigitNumbers();
