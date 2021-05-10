export function isRationalNumber(number: number) {
  const sqrt = Math.sqrt(number);
  return sqrt === Math.floor(sqrt);
}
