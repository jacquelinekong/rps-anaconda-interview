export interface GameState {
  player1Score: number;
  player2Score: number;
}

const PlayerScoreboard = (props: GameState): JSX.Element => {
  return (
    <div>
      <p>Player 1 Score: {props.player1Score}</p>
      <p>Player 2 Score: {props.player2Score}</p>
    </div>
  );
};

export default PlayerScoreboard;
