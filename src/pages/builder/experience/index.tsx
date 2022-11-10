import { useRouter } from 'next/router';
import Builder from '..';
import { experienceDetailsVar, progressBarVar } from '../../../apollo/cache';
import { URL } from '../../../appConstants';
import {
  AccordionModel,
  EducationDetailsModel,
} from '../../../interfaces/shared.interface';
import ExperianceLayout from '../../../layouts/ExperianceLayout';
import { NextPageWithLayout } from '../../_app';

const Experience: NextPageWithLayout = () => {
  const router = useRouter();
  const progressBarItems = progressBarVar();
  const experienceDetails = experienceDetailsVar();

  const experienceItems: AccordionModel[] = [
    { title: 'Education and Qualifications' },
  ];

  const onChangeEducationDetails = (data: EducationDetailsModel) => {
    experienceDetailsVar({ ...experienceDetails, education: data });
  };

  const onCancel = () => {
    router.push(URL.BUILDER_PERSONAL_DETAILS);
  };

  const onSubmit = () => {
    const currentProgressBarItems = progressBarItems.map((x) => {
      x.isActive = x.link === URL.BUILDER_TEMPLATE;

      return x;
    });

    progressBarVar(currentProgressBarItems);
    router.push(URL.BUILDER_TEMPLATE);
  };

  return (
    <ExperianceLayout
      experienceItems={experienceItems}
      experienceDetails={experienceDetails}
      onChangeEducationDetails={onChangeEducationDetails}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  );
};

Experience.getLayout = function getLayout(page) {
  return <Builder>{page}</Builder>;
};

export default Experience;
