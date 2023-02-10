import React, { useEffect, useState } from "react";

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

interface PlayerControlsProps {
  playerName: string;
  incrementScore: () => void;
}

export const PlayerControls = (props: PlayerControlsProps): JSX.Element => {
  return (
    <div>
      <button onClick={props.incrementScore}>
        Increase {props.playerName} Score
      </button>
    </div>
  );
};

// Sends the current game state to the API when clicked
export const SaveButton = (props: GameState): JSX.Element => {
  return (
    <div>
      <button
        onClick={() =>
          fetch("/game", { method: "POST", body: JSON.stringify(props) })
        }
      >
        Save
      </button>
    </div>
  );
};

export default Game;
