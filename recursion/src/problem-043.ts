export function reverseString(string: string) {
  const len = string.length;
  let ans = '';
  for (let i = 0; i < len; i++) {
    ans += string.slice(len - i - 1, len - i);
  }
  return ans;
}
