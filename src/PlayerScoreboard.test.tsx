import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerScoreboard, { GameState } from "./PlayerScoreboard";

test("PlayerScoreboard renders scores", () => {
  const testProps: GameState = {
    player1Score: 4,
    player2Score: 0,
  };
  render(<PlayerScoreboard {...testProps} />);
  const p1Score = screen.getByText(/Player 1 Score: 4/i);
  const p2Score = screen.getByText(/Player 2 Score: 0/i);
  expect(p1Score).toBeInTheDocument();
  expect(p2Score).toBeInTheDocument();
});
