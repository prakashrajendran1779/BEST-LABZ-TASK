const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class SnakeAndLadder {
    constructor(numPlayers) {
        this.numPlayers = numPlayers;
        this.positions = Array(numPlayers).fill(0);  
        this.currentPlayer = 0;  
        this.winner = null;  
        
        this.snakes = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
        this.ladders = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91 };
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1; 
    }

    movePlayer(player, roll) {
        let newPosition = this.positions[player] + roll;

        
        if (newPosition > 100) {
            console.log(`Player ${player + 1} rolled ${roll} but can't move beyond 100.`);
            return;
        }
        if (this.snakes[newPosition]) {
            newPosition = this.snakes[newPosition];
            console.log(`Player ${player + 1} encountered a snake and is now on ${newPosition}.`);
        }

        if (this.ladders[newPosition]) {
            newPosition = this.ladders[newPosition];
            console.log(`Player ${player + 1} climbed a ladder and is now on ${newPosition}.`);
        }

        if (this.positions[player] === 94 && roll === 6) {
            this.positions[player] = 100;
            console.log(`Player ${player + 1} wins by rolling a 6!`);
            this.winner = player + 1;
            return;
        } else if (this.positions[player] === 94 && (roll === 3 || roll === 4)) {
            newPosition += roll;
            if (newPosition === 98 || newPosition === 99) {
                console.log(`Player ${player + 1} is now on ${newPosition} and needs a ${100 - newPosition} to win.`);
                this.positions[player] = newPosition;
                return;
            } else {
                console.log(`Player ${player + 1} can't move with ${roll}.`);
                return;
            }
        }

        if (newPosition === 100) {
            console.log(`Player ${player + 1} wins the game!`);
            this.positions[player] = 100;
            this.winner = player + 1;
            return;
        }

        this.positions[player] = newPosition;
        console.log(`Player ${player + 1} moved to position ${newPosition}.`);
    }

    playTurn() {
        if (this.winner !== null) return;  

        const player = this.currentPlayer;
        let roll = this.rollDice();
        console.log(`Player ${player + 1} rolls a ${roll}.`);

        
        if (this.positions[player] === 0 && roll !== 1) {
            console.log(`Player ${player + 1} needs a 1 to start.`);
        } else {
            this.movePlayer(player, roll);

        
            if (roll === 6 || roll === 1 && this.winner === null) {
                console.log(`Player ${player + 1} gets an extra roll.`);
                this.playTurn();  
                return;  
            }
        }

        
        this.currentPlayer = (this.currentPlayer + 1) % this.numPlayers;
    }

    startGame() {
        while (this.winner === null) {
            this.playTurn();
        }
        console.log(`Player ${this.winner} wins the game! Game over!`);
        rl.close(); 
    }
}

function startGameSetup() {
    rl.question('Enter number of players (1-6): ', (input) => {
        const numPlayers = parseInt(input);
        
        if (isNaN(numPlayers) || numPlayers < 1 || numPlayers > 6) {
            console.log('Invalid input. Please enter a number between 1 and 6.');
            startGameSetup(); 
        } else {
            const game = new SnakeAndLadder(numPlayers);
            game.startGame();
        }
    });
}

startGameSetup();
