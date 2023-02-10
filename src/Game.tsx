import React, { useState } from "react";

function Game() {
  const [player1Score, setplayer1Score] = useState(0);
  const [player2Score, setplayer2Score] = useState(0);

  return (
    <div>
      <h1>Rock Paper Scissors!</h1>
      <PlayerScoreboard
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <PlayerControls
        incrementScore={() => setplayer1Score(player1Score + 1)}
      />
      <PlayerControls
        incrementScore={() => setplayer2Score(player2Score + 1)}
      />
    </div>
  );
}

export interface GameState {
  player1Score: number;
  player2Score: number;
}

export const PlayerScoreboard = (props: GameState): JSX.Element => {
  return (
    <div>
      <p>Player 1 Score: {props.player1Score}</p>
      <p>Player 2 Score: {props.player2Score}</p>
    </div>
  );
};

export const PlayerControls = (props: {
  incrementScore: () => void;
}): JSX.Element => {
  return (
    <div>
      <button onClick={props.incrementScore}>Increase Score</button>
    </div>
  );
};

export default Game;
