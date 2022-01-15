export function isMountain(height: number[]): boolean {
  const max = Math.max(...height);
  const tops = height.filter((h) => h == max);

  // 頂点が複数あったら NG
  if (tops.length != 1) {
    return false;
  }
  const index = height.indexOf(max);

  // 頂点が端にあったら NG
  if (index == 0 || index == height.length - 1) {
    return false;
  }

  // 頂点より左側
  for (let i = index; i > 0; i--) {
    if (height[i - 1] >= height[i]) {
      return false;
    }
  }

  // 頂点より右側
  for (let i = index; i < height.length - 1; i++) {
    if (height[i] <= height[i + 1]) {
      return false;
    }
  }

  return true;
}
