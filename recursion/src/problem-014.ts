export function isThereSchool(day: string, isHoliday: boolean) {
  return !(isHoliday || day === 'Sunday' || day === 'Saturday');
}
