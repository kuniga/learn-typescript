export function decimalToBinary(decNumber: number) {
  const ans: number[] = [];
  let n = decNumber;
  while (n > 0) {
    ans.push(n % 2);
    n = Math.floor(n / 2);
  }
  return ans.reverse().join('');
}
