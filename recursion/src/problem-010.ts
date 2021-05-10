export function weekly7DaysSales(ticketPrice: number) {
  return -(ticketPrice - 250) * 700 + 150000;
}
