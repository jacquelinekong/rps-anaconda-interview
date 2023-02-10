import { GameState } from "./PlayerScoreboard";

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
