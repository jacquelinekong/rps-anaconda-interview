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

type RockPaperScissors = "Rock" | "Paper" | "Scissors";
const winnerToLoser: Record<RockPaperScissors, RockPaperScissors> = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};
export const determineWinner = (
  entry1: RockPaperScissors,
  entry2: RockPaperScissors
): RockPaperScissors => {
  // Tie
  if (entry1 === entry2) {
    return entry1;
  }

  // Not a tie, so there must be a winner
  if (winnerToLoser[entry1] === entry2) {
    return entry1;
  } else {
    return entry2;
  }
};
