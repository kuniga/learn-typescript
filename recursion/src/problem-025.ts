export function middleSubstring(stringInput: string) {
  const len = stringInput.length;
  if (len <= 2) {
    return stringInput.slice(0, 1);
  }
  const pos_start = Math.round(len / 4);
  const pos_end = pos_start + Math.floor(len / 2);
  return stringInput.slice(pos_start, pos_end);
}
