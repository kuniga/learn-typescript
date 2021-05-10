export function lastFourHint(stringInput: string) {
  const len = stringInput.length;
  if (len < 6) {
    return 'There is no Hint';
  }
  return `Hint is:${stringInput.slice(len - 4, len)}`;
}
