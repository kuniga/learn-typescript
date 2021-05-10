export function howLongToReachFundGoal(
  capitalMoney: number,
  goalMoney: number,
  interest: number
) {
  let tmpCapital = capitalMoney;
  let tmpGoal = goalMoney;
  let year = 0;

  while (tmpCapital < tmpGoal && year < 80) {
    year += 1;
    tmpCapital = capitalMoney * (1 + interest / 100) ** year;
    tmpGoal *= year % 2 === 1 ? 1.02 : 1.03;
  }
  return year;
}
