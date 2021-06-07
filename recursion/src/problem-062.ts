type bit = 0 | 1;

export function twosComplement(bits: string) {
  const invertedArray = bits.split('').map((c) => {
    return { '0': 1, '1': 0 }[c] as bit;
  });
  return incrementBinary(invertedArray).join('');
}

const incrementBinary = (input: bit[]) => {
  const outputArray = input;
  let moveUp = 1;
  for (let idx = outputArray.length - 1; idx >= 0; idx--) {
    if (moveUp === 0) {
      continue;
    }
    if (outputArray[idx] === 0) {
      outputArray[idx] = 1;
      moveUp = 0;
    } else {
      outputArray[idx] = 0;
    }
  }
  if (moveUp) {
    outputArray.unshift(1);
  }
  return outputArray;
};
