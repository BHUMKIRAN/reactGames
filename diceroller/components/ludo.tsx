"use client";

import { useState } from "react";
import Dice from "./dice";
import Token from "./token";

export default function LudoGame() {
  const [positions, setPositions] = useState({
    red: 0,
    green: 0,
  });

  const [currentPlayer, setCurrentPlayer] = useState<"red" | "green">("red");
  const [dice, setDice] = useState<number | null>(null);

  const rollDice = (value: number) => {
    setDice(value);
  };

  const moveToken = () => {
    if (dice === null) return;

    setPositions((prev) => ({
      ...prev,
      [currentPlayer]: prev[currentPlayer] + dice,
    }));

    // switch turn
    setCurrentPlayer(currentPlayer === "red" ? "green" : "red");
    setDice(null);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">
        Current Turn: {currentPlayer.toUpperCase()}
      </h2>

      <Dice onRoll={rollDice} />

      <div className="flex gap-10">
        <Token color="red" position={positions.red} onMove={moveToken} />
        <Token color="green" position={positions.green} onMove={moveToken} />
      </div>

      <p>Dice Value: {dice ?? "-"}</p>
    </div>
  );
}
