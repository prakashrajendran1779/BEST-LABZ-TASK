const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const initializeBoard = () => ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const printBoard = (board) => {
  console.log(`
  ${board[0]} | ${board[1]} | ${board[2]}
  ---------
  ${board[3]} | ${board[4]} | ${board[5]}
  ---------
  ${board[6]} | ${board[7]} | ${board[8]}
  `);
};

const checkWin = (board, player) => {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]  
  ];

  return winConditions.some(condition =>
    condition.every(index => board[index] === player)
  );
};

const isDraw = (board) => board.every(cell => cell === 'X' || cell === 'O');

const makeMove = (board, index, player) => {
  if (board[index] !== 'X' && board[index] !== 'O') {
    board[index] = player;
    return true;
  }
  return false;
};

const getAvailableMoves = (board) => {
  return board
    .map((cell, index) => (cell !== 'X' && cell !== 'O' ? index : -1))
    .filter(index => index !== -1);
};

const isWinningMove = (board, index, player) => {
  const tempBoard = [...board];
  tempBoard[index] = player;
  return checkWin(tempBoard, player);
};

const aiMove = (board) => {
  const availableMoves = getAvailableMoves(board);


  for (const move of availableMoves) {
    if (isWinningMove(board, move, 'O')) {
      return move;
    }
  }

  
  for (const move of availableMoves) {
    if (isWinningMove(board, move, 'X')) {
      return move;
    }
  }

  const corners = [0, 2, 6, 8];
  for (const corner of corners) {
    if (availableMoves.includes(corner)) {
      return corner;
    }
  }

  if (availableMoves.includes(4)) {
    return 4;
  }

  const sides = [1, 3, 5, 7];
  for (const side of sides) {
    if (availableMoves.includes(side)) {
      return side;
    }
  }

  return availableMoves[0]; 
};

const startGame = () => {
  let board = initializeBoard();
  let playerLetter;
  let computerLetter;

  const toss = () => {
    rl.question('Toss a coin to decide who goes first (type "heads" or "tails"): ', (choice) => {
      const isPlayerFirst = Math.random() > 0.5;
      if (isPlayerFirst) {
        console.log('You go first!');
        chooseLetter();
      } else {
        console.log('Computer goes first!');
        computerLetter = 'O';
        playerLetter = 'X';
        makeMove(board, aiMove(board), computerLetter);
        gameLoop();
      }
    });
  };

  const chooseLetter = () => {
    rl.question('Choose your letter (X or O): ', (letter) => {
      if (letter === 'X' || letter === 'O') {
        playerLetter = letter;
        computerLetter = (letter === 'X') ? 'O' : 'X';
        gameLoop();
      } else {
        console.log('Invalid choice. Choose X or O.');
        chooseLetter();
      }
    });
  };

  const gameLoop = () => {
    printBoard(board);
    
    rl.question('Enter your move (1-9): ', (move) => {
      const index = parseInt(move) - 1;

      if (index < 0 || index > 8 || isNaN(index)) {
        console.log('Invalid move. Try again.');
        return gameLoop();
      }

      if (!makeMove(board, index, playerLetter)) {
        console.log('Cell already taken. Try again.');
        return gameLoop();
      }

      if (checkWin(board, playerLetter)) {
        printBoard(board);
        console.log('Congratulations! You win!');
        return rl.close();
      }

      if (isDraw(board)) {
        printBoard(board);
        console.log('It\'s a draw!');
        return rl.close();
      }


      const aiMoveIndex = aiMove(board);
      makeMove(board, aiMoveIndex, computerLetter);

      if (checkWin(board, computerLetter)) {
        printBoard(board);
        console.log('COMPUTER wins!');
        return rl.close();
      }

      if (isDraw(board)) {
        printBoard(board);
        console.log('It\'s a draw!');
        return rl.close();
      }

      gameLoop();
    });
  };

  toss();
};

startGame();
