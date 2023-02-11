import React from "react";
import { render, screen } from "@testing-library/react";
import {
  determineWinner,
  PlayerControls,
  PlayerControlsProps,
} from "./PlayerControls";

describe("PlayerControls", () => {
  const defaultProps: PlayerControlsProps = {
    playerName: "Jacqueline",
    choice: "",
    setChoice: () => undefined,
  };

  test("renders a message telling the player to choose", () => {
    render(<PlayerControls {...defaultProps} />);
    const playerPrompt = screen.queryByText(/Jacqueline, choose:/i);
    expect(playerPrompt).toBeInTheDocument();
  });

  test("renders three buttons for rock, paper, scissors", () => {
    render(<PlayerControls {...defaultProps} />);
    const rockButton = screen.queryByText(/Rock/i);
    const paperButton = screen.queryByText(/Paper/i);
    const scissorsButton = screen.queryByText(/Scissors/i);

    expect(rockButton).toBeInTheDocument();
    expect(paperButton).toBeInTheDocument();
    expect(scissorsButton).toBeInTheDocument();
  });
});

describe("determineWinner", () => {
  test("determineWinner chooses rock over scissors", () => {
    expect(determineWinner("Rock", "Scissors")).toEqual("Rock");
    expect(determineWinner("Scissors", "Rock")).toEqual("Rock");
  });

  test("determineWinner chooses paper over rock", () => {
    expect(determineWinner("Paper", "Rock")).toEqual("Paper");
    expect(determineWinner("Rock", "Paper")).toEqual("Paper");
  });

  test("determineWinner chooses scissors over paper", () => {
    expect(determineWinner("Paper", "Scissors")).toEqual("Scissors");
    expect(determineWinner("Scissors", "Paper")).toEqual("Scissors");
  });

  test("determineWinner works for ties", () => {
    expect(determineWinner("Rock", "Rock")).toEqual("Rock");
    expect(determineWinner("Paper", "Paper")).toEqual("Paper");
    expect(determineWinner("Scissors", "Scissors")).toEqual("Scissors");
  });
});
