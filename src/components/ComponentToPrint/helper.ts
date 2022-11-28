import {
  EducationDetailsModel,
  PersonalDetailsModel,
  WorkDetailsModel,
} from '../../interfaces/shared.interface';
import {
  SectionItemModel,
  TemplateSidebarItem,
} from '../../interfaces/templates';

export const getSideBarData = (
  details: PersonalDetailsModel
): TemplateSidebarItem[] => {
  const { firstname, lastname, address, code, city, phone, email } = details;

  return [
    {
      label: 'Name',
      value: `${firstname || ''} ${lastname || ''}`,
    },
    {
      label: 'Address',
      value: `${address || ''} ${code || ''} ${city || ''}`,
    },
    {
      label: 'Phone number',
      value: phone,
    },
    {
      label: 'Email',
      value: email,
    },
  ];
};

export const getEducationExperienceItemData = (
  data: EducationDetailsModel
): SectionItemModel => {
  const {
    degree,
    startDateMonth,
    startDateYear,
    endDateMonth,
    endDateYear,
    school,
    city,
    details,
  } = data;

  return {
    title: degree,
    subTitle: `${school || ''}${school && city ? ', ' : ''}${city || ''}`,
    date: getDate(startDateMonth, startDateYear, endDateMonth, endDateYear),
    info: details,
  };
};

export const getWorkExperienceItemData = (
  data: WorkDetailsModel
): SectionItemModel => {
  const {
    jobTitle,
    startDateMonth,
    startDateYear,
    endDateMonth,
    endDateYear,
    employer,
    city,
    responsibilities,
  } = data;

  return {
    title: jobTitle,
    subTitle: `${employer || ''}${employer && city ? ', ' : ''}${city || ''}`,
    date: getDate(startDateMonth, startDateYear, endDateMonth, endDateYear),
    info: responsibilities,
  };
};

const getDate = (
  startDateMonth: string,
  startDateYear: string,
  endDateMonth: string,
  endDateYear: string
): string => {
  return `${startDateMonth || ''} ${startDateYear || ''} ${
    (startDateMonth || startDateYear) && (endDateMonth || endDateYear)
      ? '-'
      : ''
  } ${endDateMonth || ''} ${endDateYear || ''}`;
};
