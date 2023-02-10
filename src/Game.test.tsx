import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game, { GameState, PlayerScoreboard } from "./Game";

test("renders title", () => {
  render(<Game />);
  const titleElement = screen.getByText(/Rock Paper Scissors!/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders scoreboard", () => {
  render(<Game />);
  const p1Score = screen.getByText(/Player 1 Score:/i);
  const p2Score = screen.getByText(/Player 2 Score:/i);
  expect(p1Score).toBeInTheDocument();
  expect(p2Score).toBeInTheDocument();
});

// This is more of an integration test. Ideally I'd also unit test
// the PlayerControls library by spying on the incrementScores callback
// and verifying that it's called on button click, but I don't think
// the included testing library supports that and I don't want to spend
// too much time messing around with installing libraries.
test("clicking buttons increases player scores", () => {
  render(<Game />);
  let p1InitialScore: HTMLElement | null =
    screen.getByText(/Player 1 Score: 0/i);
  expect(p1InitialScore).toBeInTheDocument();
  userEvent.click(screen.getByText("Increase Player 1 Score"));

  p1InitialScore = screen.queryByText(/Player 1 Score: 0/i);
  expect(p1InitialScore).toBeNull();
  const p1NewScore = screen.getByText(/Player 1 Score: 1/i);
  expect(p1NewScore).toBeInTheDocument();

  let p2InitialScore: HTMLElement | null =
    screen.getByText(/Player 2 Score: 0/i);
  expect(p2InitialScore).toBeInTheDocument();
  userEvent.click(screen.getByText("Increase Player 2 Score"));

  p2InitialScore = screen.queryByText(/Player 2 Score: 0/i);
  expect(p2InitialScore).toBeNull();
  const p2NewScore = screen.getByText(/Player 2 Score: 1/i);
  expect(p2NewScore).toBeInTheDocument();
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
