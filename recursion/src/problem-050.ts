export function recursiveDigitsAdded(digits: number) {
  if (digits < 10) {
    return digits;
  }

  let total = 0;

  function splitAndAdd(digits: number): number {
    if (digits < 10) {
      return total;
    }
    const subTotal = calcTotal(digits);
    total += subTotal;
    return splitAndAdd(subTotal);
  }

  return splitAndAdd(digits);
}

function calcTotal(digits: number) {
  const str = digits.toString();
  const len = str.length;
  let total = 0;

  for (let i = 0; i < len; i++) {
    total += parseInt(str[i]);
  }
  return total;
}
