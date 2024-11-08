const moneyFormatter = new Intl.NumberFormat("ar");

const pointsUnitPlurals = [
  "0 نقطة",
  "نقطة واحدة",
  "نقطتين",
  "%d نقاط",
  "%d نقطة",
  "%d نقطة",
];

const filesUnitPlurals = [
  "0 ملف",
  "ملف واحد",
  "ملفين",
  "%d ملفات",
  "%d ملف",
  "%d ملف",
];

const pagesUnitPlurals = [
  "0 صفحة",
  "صفحة واحدة",
  "صفحتين",
  "%d صفحات",
  "%d صفحة",
  "%d صفحة",
];

const daysUnitPlurals = [
  "0 يوم",
  "يوم واحد",
  "يومين",
  "%d أيام",
  "%d يوم",
  "%d يوم",
];

const pluralForm = (n: number) => {
  return n === 0
    ? 0
    : n === 1
    ? 1
    : n === 2
    ? 2
    : n % 100 >= 3 && n % 100 <= 10
    ? 3
    : n % 100 >= 11
    ? 4
    : 5;
};

export const pointsFormater = (points: number) => {
  if (isNaN(Number(points))) return "";
  return pointsUnitPlurals[pluralForm(points)].replace(
    /%d/i,
    moneyFormatter.format(points)
  );
};

export const filesNumberFormater = (num: number) => {
  if (isNaN(Number(num))) return "";
  return filesUnitPlurals[pluralForm(num)].replace(
    /%d/i,
    moneyFormatter.format(num)
  );
};

export const pagesNumberFormater = (points: number) => {
  if (isNaN(Number(points))) return "";
  return pagesUnitPlurals[pluralForm(points)].replace(
    /%d/i,
    moneyFormatter.format(points)
  );
};

export const daysNumberFormater = (points: number) => {
  if (isNaN(Number(points))) return "";
  return daysUnitPlurals[pluralForm(points)].replace(
    /%d/i,
    moneyFormatter.format(points)
  );
};
