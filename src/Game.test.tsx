import React from "react";
import { render, screen } from "@testing-library/react";
import Game, { GameState, PlayerScoreboard } from "./Game";

test("renders title", () => {
  render(<Game />);
  const titleElement = screen.getByText(/Rock Paper Scissors!/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders scoreboard", () => {
  render(<Game />);
  const p1Score = screen.getByText(/Player 1 Score/i);
  const p2Score = screen.getByText(/Player 2 Score/i);
  expect(p1Score).toBeInTheDocument();
  expect(p2Score).toBeInTheDocument();
});

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
