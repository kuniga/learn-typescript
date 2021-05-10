export function insertUnderscoreAt(s: string, i: number) {
  const len = s.length;
  if (i >= len) {
    return s;
  }
  return s.slice(0, i) + '_' + s.slice(i);
}
