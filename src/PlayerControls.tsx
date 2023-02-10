// This component encapsulates the buttons that the player presses to play
// the game (i.e., rock, paper, scissors)

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
