import { InMemoryCache, makeVar } from '@apollo/client';
import { URL } from '../../appConstants';
import {
  ExperianceDetailsModel,
  PersonalDetailsModel,
  ProgressBarItem,
} from '../../interfaces/shared.interface';

export const cache = new InMemoryCache();

// const personalDetailsInitialValue: PersonalDetailsModel = {
//   firstname: '',
//   lastname: '',
//   email: '',
//   phone: '',
//   address: '',
//   city: '',
//   code: '',
// };

// const experienceDetailsInitialValue

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
  education: {},
});
