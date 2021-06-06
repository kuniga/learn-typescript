type bit = 0 | 1;

export function addBinaryNumber(bits1: string, bits2: string) {
  const array1 = bits1
    .replace(/^0+/, '')
    .split('')
    .map((c) => {
      return parseInt(c, 2) as bit;
    });
  const array2 = bits2
    .replace(/^0+/, '')
    .split('')
    .map((c) => {
      return parseInt(c, 2) as bit;
    });
  const length1 = array1.length;
  const length2 = array2.length;
  const outputArray: bit[] = [];

  // padding
  if (length1 < length2) {
    array1.unshift(...Array(length2 - length1).fill(0));
  } else if (length1 > length2) {
    array2.unshift(...Array(length1 - length2).fill(0));
  }

  let moveUp: bit = 0;
  let ans: bit;
  for (let idx = Math.max(length1, length2) - 1; idx >= 0; idx--) {
    [moveUp, ans] = addOneBit(moveUp, array1[idx], array2[idx]);
    outputArray.unshift(ans);
  }
  if (outputArray.length === 0) {
    outputArray.unshift(0);
  }
  if (moveUp) {
    outputArray.unshift(1);
  }

  return outputArray.join('');
}

const addOneBit = (moveUp: bit, bit1: bit, bit2: bit): [bit, bit] => {
  const sum = moveUp + bit1 + bit2;
  if (sum === 0) {
    return [0, 0];
  } else if (sum === 1) {
    return [0, 1];
  } else if (sum === 2) {
    return [1, 0];
  }
  return [1, 1];
};
