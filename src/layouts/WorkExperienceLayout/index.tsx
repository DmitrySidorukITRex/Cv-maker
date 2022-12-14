import { useReactiveVar } from '@apollo/client';
import React, { useState } from 'react';
import {
  currentWorkDetailsVar,
  experienceDetailsVar,
} from '../../apollo/cache';
import WorkDetailsForm from '../../components/Forms/work-details';
import ExperienceItem from '../../components/ExperienceItem';
import {
  ExperienceItemModel,
  WorkDetailsModel,
  WorkExperienceItemModel,
} from '../../interfaces/shared.interface';
import * as LayoutStyled from '../styled';
import * as Styled from './styled';

const WorkExperienceLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const experienceDetails = useReactiveVar(experienceDetailsVar);
  const currentWorkDetails = useReactiveVar(currentWorkDetailsVar);

  const onCancel = () => {
    setIsOpen(false);
  };

  const onSave = (data: WorkDetailsModel | WorkExperienceItemModel) => {
    if (currentWorkDetails) {
      editWorkExperienceItem(data as WorkExperienceItemModel);
    } else {
      saveWorkExperience(data as WorkDetailsModel);
    }

    setIsOpen(false);
    currentWorkDetailsVar(null);
  };

  const onEditWorkExperienceItem = (data: ExperienceItemModel) => {
    const currentItem = experienceDetails.work.find((x) => x.id === data.id);
    currentWorkDetailsVar(currentItem);

    setIsOpen(true);
  };

  const saveWorkExperience = (data: WorkDetailsModel) => {
    const newWorkExperienceItem = {
      ...data,
      id: Math.random().toString().slice(2),
    };
    experienceDetailsVar({
      ...experienceDetails,
      work: [...experienceDetails.work, newWorkExperienceItem],
    });
  };

  const removeWorkExperienceItem = (data: ExperienceItemModel) => {
    const id = data.id ?? (currentWorkDetails as WorkExperienceItemModel).id;
    const workExperienceItems = experienceDetails.work.filter(
      (item) => item.id !== id
    );

    experienceDetailsVar({
      ...experienceDetails,
      work: workExperienceItems,
    });
  };

  const editWorkExperienceItem = (data: WorkExperienceItemModel) => {
    const copy = [...experienceDetails.work];
    const currentItemIndex = copy.findIndex((x) => x.id === data.id);

    copy[currentItemIndex] = data;

    experienceDetailsVar({
      ...experienceDetails,
      work: [...copy],
    });
  };

  const getExperienceItem = (
    data: WorkExperienceItemModel
  ): ExperienceItemModel => {
    return {
      id: data.id,
      title: data.jobTitle ? data.jobTitle : 'Job title',
      startDateMonth: data.startDateMonth,
      startDateYear: data.startDateYear,
      endDateMonth: data.endDateMonth,
      endDateYear: data.endDateYear,
    };
  };

  const btnText = experienceDetails.work.length
    ? 'Add another work experience'
    : 'Add your work experience';

  return (
    <Styled.Layout>
      {experienceDetails.work.map((item, i) => (
        <ExperienceItem
          key={i}
          item={getExperienceItem(item)}
          onRemove={removeWorkExperienceItem}
          onEdit={onEditWorkExperienceItem}
        />
      ))}
      {isOpen && (
        <WorkDetailsForm
          workDetails={currentWorkDetails}
          onCancel={onCancel}
          onSave={onSave}
        />
      )}
      <LayoutStyled.AddExperienceItemButton onClick={() => setIsOpen(true)}>
        {btnText}
      </LayoutStyled.AddExperienceItemButton>
    </Styled.Layout>
  );
};

export default WorkExperienceLayout;
