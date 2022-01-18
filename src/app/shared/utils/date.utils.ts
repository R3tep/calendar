export const firstWeekDayByDate = (d: Date) => {
  const frStartDayWeek = new Date(d.setDate(d.getDate() - 1));
  const first = frStartDayWeek.getDate() - frStartDayWeek.getDay() + 1;
  return new Date(frStartDayWeek.setDate(first));
};

export const dateToStringKey = (d: Date) => `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
