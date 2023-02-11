import React, { useEffect, useState } from "react";
import {
  determineWinner,
  PlayerControls,
  RockPaperScissors,
} from "./PlayerControls";

import PlayerScoreboard, { GameState } from "./PlayerScoreboard";
import { SaveButton } from "./SaveButton";

function Game() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // TODO: Create a component that encapsulates the choice state/winner logic
  //       instead of keeping it at the top level. Also type this as RockPaperScissors | "".
  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");

  // Load the game state after the component first mounts
  useEffect(() => {
    fetch("/game", { method: "GET" })
      .then((res) => res.json())
      .then((gameState: GameState) => {
        setPlayer1Score(gameState.player1Score);
        setPlayer2Score(gameState.player2Score);
      });
  }, []);

  // When both players have chosen, determine winner, increment score, and reset choices
  useEffect(() => {
    if (player1Choice !== "" && player2Choice !== "") {
      setTimeout(() => {
        // TODO: The cast can go away when we fix the typing above
        const winner = determineWinner(
          player1Choice as RockPaperScissors,
          player2Choice as RockPaperScissors
        );

        if (player1Choice === player2Choice) {
          alert("Tie!");
        } else if (player1Choice === winner) {
          alert("Player 1 wins!");
          setPlayer1Score((p) => p + 1);
        } else if (player2Choice === winner) {
          alert("Player 2 wins!");
          setPlayer2Score((p) => p + 1);
        }

        setPlayer1Choice("");
        setPlayer2Choice("");
      }, 1000);
    }
  }, [player1Choice, player2Choice]);

  return (
    <div>
      <h1>Rock Paper Scissors!</h1>
      <PlayerScoreboard
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <PlayerControls
        playerName="Player 1"
        choice={player1Choice}
        setChoice={setPlayer1Choice}
      />
      <PlayerControls
        playerName="Player 2"
        choice={player2Choice}
        setChoice={setPlayer2Choice}
      />
      <SaveButton player1Score={player1Score} player2Score={player2Score} />
    </div>
  );
}

export default Game;
