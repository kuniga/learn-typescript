export function howMuchIsYourDebt(year: number) {
  return Math.floor(10000 * 1.2 ** year);
}
