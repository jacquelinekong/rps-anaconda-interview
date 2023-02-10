import { determineWinner } from "./PlayerControls";

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
