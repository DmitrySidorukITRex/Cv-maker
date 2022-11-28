import React from 'react';

export interface ProgressBarItem {
  title: string;
  isActive: boolean;
  link: string;
}

export interface PersonalDetailsModel {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  code: string;
  email: string;
  phone: string;
}

export interface EducationDetailsModel {
  degree: string;
  city: string;
  school: string;
  startDateMonth: string;
  startDateYear: string;
  endDateMonth: string;
  endDateYear: string;
  details: string;
}

export interface EducationExperienceItemModel extends EducationDetailsModel {
  id: string;
}

export interface WorkDetailsModel {
  jobTitle: string;
  city: string;
  employer: string;
  startDateMonth: string;
  startDateYear: string;
  endDateMonth: string;
  endDateYear: string;
  responsibilities: string;
}

export interface WorkExperienceItemModel extends WorkDetailsModel {
  id: string;
}

export interface ExperianceDetailsModel {
  work: WorkExperienceItemModel[] | [];
  education: EducationExperienceItemModel[] | [];
}

export interface AccordionModel {
  headerEl: React.ReactNode;
  contentEl: React.ReactNode;
}

export interface SelectModel {
  items: SelectItem[];
}

export interface SelectItem {
  name: string;
  value: string;
}

export interface ExperienceItemModel {
  id: string;
  title: string;
  startDateMonth: string;
  startDateYear: string;
  endDateMonth: string;
  endDateYear: string;
}
