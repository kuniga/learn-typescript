export function vacationRental(people: number, day: number) {
  let unitPrice;
  if (day >= 10) {
    unitPrice = 50;
  } else if (day >= 4) {
    unitPrice = 60;
  } else {
    unitPrice = 80;
  }
  return Math.floor(unitPrice * day * people * 1.12 * 1.08);
}
