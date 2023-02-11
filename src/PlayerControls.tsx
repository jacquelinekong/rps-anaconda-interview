// This component encapsulates the buttons that the player presses to play
// the game (i.e., rock, paper, scissors)

export interface PlayerControlsProps {
  playerName: string;
  choice: string;
  setChoice: (choice: string) => void;
}

export const PlayerControls = (props: PlayerControlsProps): JSX.Element => {
  return (
    <div>
      <p>{props.playerName}, choose:</p>
      <button onClick={() => props.setChoice("Rock")}>Rock</button>
      <button onClick={() => props.setChoice("Paper")}>Paper</button>
      <button onClick={() => props.setChoice("Scissors")}>Scissors</button>
      {props.choice !== "" && (
        <p>
          {props.playerName} Choice: {props.choice}
        </p>
      )}
    </div>
  );
};

export type RockPaperScissors = "Rock" | "Paper" | "Scissors";
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
