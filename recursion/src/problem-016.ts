export function canProcessOrder(
  beef: boolean,
  chicken: boolean,
  salad: boolean,
  coffee: boolean,
  tea: boolean
) {
  if (beef === chicken) {
    return false;
  }
  if (coffee === tea) {
    return false;
  }
  return true;
}
