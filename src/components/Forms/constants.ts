import { MONTHS, YEARS } from '../../appConstants';
import { SelectModel } from '../../interfaces/shared.interface';

export const GraduationMonthsSelect: SelectModel = {
  items: [
    { name: 'Month', value: '' },
    ...Object.values(MONTHS).map((value) => ({
      name: value,
      value: value,
    })),
  ],
};

export const GraduationYearsSelect: SelectModel = {
  items: [
    { name: 'Year', value: '' },
    ...Object.values(YEARS)
      .filter((x) => !isNaN(Number(x)))
      .reverse()
      .map((value) => ({
        name: value as string,
        value: value as string,
      })),
  ],
};
