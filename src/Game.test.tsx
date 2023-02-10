import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "./Game";

test("renders title", () => {
  render(<Game />);
  const linkElement = screen.getByText(/Rock Paper Scissors!/i);
  expect(linkElement).toBeInTheDocument();
});
