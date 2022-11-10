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
  graduationMonth: string;
  graduationYear: string;
  details: string;
}

export interface ExperianceDetailsModel {
  education: EducationDetailsModel | {};
}

export interface AccordionModel {
  title: string;
}

export interface SelectModel {
  items: SelectItem[];
}

export interface SelectItem {
  name: string;
  value: string;
}
