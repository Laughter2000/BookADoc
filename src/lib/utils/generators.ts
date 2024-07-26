/* eslint-disable no-plusplus */
function getDayName(date: Date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[date.getDay()];
}

function getDatesWithDetails(startDate: Date, daysToIterate: number) {
  const result = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < daysToIterate; i++) {
    const dayName = getDayName(currentDate);
    const fullDateString = currentDate.toDateString();
    const dayOfMonth = currentDate.getDate();
    result.push({
      dayName,
      fullDateString,
      dayOfMonth,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
}

export { getDatesWithDetails };
