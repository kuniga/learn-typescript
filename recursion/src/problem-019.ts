export function isValidEmail(email: string) {
  if (email.startsWith('@')) {
    return false;
  }
  if (email.includes(' ')) {
    return false;
  }
  if (email.split('@').length !== 2) {
    return false;
  }
  if (!email.match(/@.*\./)) {
    return false;
  }
  return true;
}
