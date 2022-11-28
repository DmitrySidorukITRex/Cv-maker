import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import Builder from '..';
import { experienceSectionsVar, progressBarVar } from '../../../apollo/cache';
import {
  ExperienceChangingPosition,
  ExperienceSectionsName,
  URL,
} from '../../../appConstants';
import ExperienceHeader from '../../../components/ExperienceHeader';
import { AccordionModel } from '../../../interfaces/shared.interface';
import EducationExperienceLayout from '../../../layouts/EducationExperienceLayout';
import ExperianceLayout from '../../../layouts/ExperianceLayout';
import WorkExperienceLayout from '../../../layouts/WorkExperienceLayout';
import { NextPageWithLayout } from '../../_app';

const Experience: NextPageWithLayout = () => {
  const router = useRouter();
  const progressBarItems = progressBarVar();
  const experienceSections = useReactiveVar(experienceSectionsVar);

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

  const onChangeExperiencePosition = (
    position: string,
    title: ExperienceSectionsName
  ) => {
    const index = experienceSections.indexOf(title);
    const copy = JSON.parse(JSON.stringify(experienceSections));

    if (position === ExperienceChangingPosition.Down) {
      if (index !== experienceSections.length) {
        const item = experienceSections[index];
        copy.splice(index, 1);
        copy.splice(index + 1, 0, item);
      }
    } else {
      if (index > 0) {
        const item = experienceSections[index - 1];
        copy.splice(index - 1, 1);
        copy.splice(index, 0, item);
      }
    }

    experienceSectionsVar(copy);
  };

  const educationAccordionModel = {
    headerEl: (
      <ExperienceHeader
        title={ExperienceSectionsName.Education}
        onChangePosition={onChangeExperiencePosition}
      />
    ),
    contentEl: <EducationExperienceLayout />,
  };

  const workAccordionModel = {
    headerEl: (
      <ExperienceHeader
        title={ExperienceSectionsName.Work}
        onChangePosition={onChangeExperiencePosition}
      />
    ),
    contentEl: <WorkExperienceLayout />,
  };

  const experienceAccordionModels = () => {
    const items: AccordionModel[] = [];
    experienceSections.forEach((section) => {
      switch (section) {
        case ExperienceSectionsName.Education:
          items.push(educationAccordionModel);
          break;
        case ExperienceSectionsName.Work:
          items.push(workAccordionModel);
          break;
        default:
          break;
      }
    });

    return items;
  };

  return (
    <ExperianceLayout
      experienceItems={experienceAccordionModels()}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  );
};

Experience.getLayout = function getLayout(page) {
  return <Builder>{page}</Builder>;
};

export default Experience;
