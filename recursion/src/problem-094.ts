type bitString = '0' | '1';

export function addBinaryNumber(bits1: string, bits2: string) {
  const array1 = bits1.replace(/^0+/, '').split('') as bitString[];
  const array2 = bits2.replace(/^0+/, '').split('') as bitString[];
  const length1 = array1.length;
  const length2 = array2.length;
  const outputArray: bitString[] = [];

  // padding
  if (length1 < length2) {
    array1.unshift(...Array(length2 - length1).fill('0'));
  }
  if (length1 > length2) {
    array2.unshift(...Array(length1 - length2).fill('0'));
  }

  let moveUp = false;
  let ans: bitString;
  for (let idx = Math.max(length1, length2) - 1; idx >= 0; idx--) {
    [ans, moveUp] = addOneBit(array1[idx], array2[idx], moveUp);
    outputArray.unshift(ans);
  }
  if (outputArray.length === 0) {
    outputArray.unshift('0');
  }
  if (moveUp) {
    outputArray.unshift('1');
  }

  return outputArray.join('');
}

const addOneBit = (
  bit1: bitString,
  bit2: bitString,
  moveUp: boolean
): [bitString, boolean] => {
  const sum = parseInt(bit1, 2) + parseInt(bit2, 2) + (moveUp ? 1 : 0);
  if (sum === 0) {
    return ['0', false];
  }
  if (sum === 1) {
    return ['1', false];
  }
  if (sum === 2) {
    return ['0', true];
  }
  return ['1', true];
};
