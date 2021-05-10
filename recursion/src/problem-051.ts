export function isPrime(number: number) {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const sqrt = Math.ceil(Math.sqrt(number));
  let ans = true;
  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      ans = false;
    }
  }
  return ans;
}
