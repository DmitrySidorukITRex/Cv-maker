import { InMemoryCache, makeVar } from '@apollo/client';
import { ExperienceSectionsName, URL } from '../../appConstants';
import {
  EducationExperienceItemModel,
  ExperianceDetailsModel,
  PersonalDetailsModel,
  ProgressBarItem,
  WorkExperienceItemModel,
} from '../../interfaces/shared.interface';

export const cache = new InMemoryCache();

export const progressBarInitialValue: ProgressBarItem[] = [
  { title: 'Personal', isActive: true, link: URL.BUILDER_PERSONAL_DETAILS },
  { title: 'Experience', isActive: false, link: URL.BUILDER_EXPERIANCE },
  { title: 'Template', isActive: false, link: URL.BUILDER_TEMPLATE },
];

export const progressBarVar = makeVar<ProgressBarItem[]>(
  progressBarInitialValue
);

export const personalDetailsVar = makeVar<PersonalDetailsModel | {}>({});

export const experienceDetailsVar = makeVar<ExperianceDetailsModel>({
  education: [],
  work: [],
});

export const currentEducationDetailsVar =
  makeVar<EducationExperienceItemModel | null>(null);

export const currentWorkDetailsVar = makeVar<WorkExperienceItemModel | null>(
  null
);

export const experienceSectionsVar = makeVar<ExperienceSectionsName[]>([
  ExperienceSectionsName.Education,
  ExperienceSectionsName.Work,
]);
