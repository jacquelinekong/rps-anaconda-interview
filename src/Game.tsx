import React, { useEffect, useState } from "react";
import { PlayerControls } from "./PlayerControls";

import PlayerScoreboard, { GameState } from "./PlayerScoreboard";
import { SaveButton } from "./SaveButton";

function Game() {
  const [player1Score, setplayer1Score] = useState(0);
  const [player2Score, setplayer2Score] = useState(0);

  // Load the game state after the component first mounts
  useEffect(() => {
    fetch("/game", { method: "GET" })
      .then((res) => res.json())
      .then((gameState: GameState) => {
        setplayer1Score(gameState.player1Score);
        setplayer2Score(gameState.player2Score);
      });
  }, []);

  return (
    <div>
      <h1>Rock Paper Scissors!</h1>
      <PlayerScoreboard
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <PlayerControls
        playerName="Player 1"
        incrementScore={() => setplayer1Score(player1Score + 1)}
      />
      <PlayerControls
        playerName="Player 2"
        incrementScore={() => setplayer2Score(player2Score + 1)}
      />
      <SaveButton player1Score={player1Score} player2Score={player2Score} />
    </div>
  );
}

export default Game;
