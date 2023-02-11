import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

describe("Game", () => {
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
});
