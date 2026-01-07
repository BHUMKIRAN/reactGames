import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">Tic Tac Toe</h2>

      {/* Status */}
      <h3 className="text-xl mb-6">
        {winner ? (
          <span className="text-green-600 font-semibold">
            Winner: {winner}
          </span>
        ) : (
          <span className="text-blue-600">
            Current Player: {currentPlayer}
          </span>
        )}
      </h3>

      {/* Board */}
      <div className="grid grid-cols-3 gap-3">
        {board.map((value, index) => (
         <button
  key={index}
  onClick={() => handleClick(index)}
  className={`
    w-24 h-24 
    border-2 border-gray-700 
    text-4xl font-bold 
    flex items-center justify-center
    transition
    ${value === "X" ? "text-blue-600" : ""}
    ${value === "O" ? "text-red-600" : ""}
    ${!value ? "hover:bg-gray-200 cursor-pointer" : "cursor-not-allowed"}
  `}
>
  {value}
</button>

        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="
          mt-6 px-6 py-2 
          bg-red-500 text-white 
          rounded-lg 
          hover:bg-red-600 
          transition
        "
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
