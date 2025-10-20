import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7); // t(2) + e(1) + s(2) + t(2) = 7
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7); // same as "test"
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("ignores non-letter characters and still calculates correctly", () => {
    const word = "t3st!";
    const points = pointsForWord(word);
    expect(points).toBe(6); // t(2) + s(2) + t(2) — numbers/symbols not counted
  });

  it("returns 0 if input is not a string", () => {
    const points = pointsForWord(12345);
    expect(points).toBe(0);
  });
});

