import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(calculateWinner(newBoard));
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return board.every(Boolean) ? "Draw" : null;
  };

  const renderSquare = (index) => (
    <Button
      variant="outline"
      className="w-16 h-16 text-2xl rounded-full border-2 border-blue-500"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="p-4 rounded-lg shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-800">Tic Tac Toe</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-2">
          {board.map((_, index) => renderSquare(index))}
        </CardContent>
      </Card>
      {winner && (
        <div className="text-center text-2xl font-bold text-white">
          {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
        </div>
      )}
      <Button className="rounded-full bg-blue-500 text-white px-4 py-2 mt-4" onClick={resetGame}>Reset Game</Button>
    </div>
  );
};

export default Index;