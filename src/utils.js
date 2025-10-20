export function pointsForWord(word) {
  if (typeof word !== "string") return 0;

  let points = 0;
  for (const char of word) {
    if (/[a-z]/i.test(char)) {
      points += /[aeiou]/i.test(char) ? 1 : 2;
    }
  }
  return points;
}
