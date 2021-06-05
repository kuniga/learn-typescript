export function twosComplement(bits: string) {
  const inverted = invertAllBits(bits);
  return incrementBinary(inverted);
}

const invertAllBits = (input: string) => {
  return input
    .split('')
    .map((c) => {
      return { '0': '1', '1': '0' }[c];
    })
    .join('');
};

const incrementBinary = (input: string) => {
  const outputArray = input.split('');
  let moveUp = true;
  for (let idx = outputArray.length - 1; idx >= 0; idx--) {
    if (!moveUp) {
      continue;
    }
    if (outputArray[idx] === '0') {
      outputArray[idx] = '1';
      moveUp = false;
    } else {
      outputArray[idx] = '0';
    }
  }
  if (moveUp) {
    outputArray.unshift('1');
  }
  return outputArray.join('');
};
