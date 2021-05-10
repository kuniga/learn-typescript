export function isThereSchool(height: number, width: number) {
  if (height >= width) {
    return 'portrait';
  }
  return 'landscape';
}
