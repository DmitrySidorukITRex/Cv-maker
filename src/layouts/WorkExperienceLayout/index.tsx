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
  const experienceDetails = experienceDetailsVar();
  const currentWorkDetails = useReactiveVar(currentWorkDetailsVar);

  const onCancel = () => {
    setIsOpen(false);
  };

  const onSave = (data: WorkDetailsModel) => {
    saveWorkExperience(data);
    setIsOpen(false);
  };

  const onEditWorkExperienceItem = (item: ExperienceItemModel) => {
    editWorkExperienceItem(item);
    setIsOpen(true);
  };

  const saveWorkExperience = (data: WorkDetailsModel) => {
    const currentWorkExperienceItems = experienceDetails.work.filter(
      (x) => x.id !== (currentWorkDetails as WorkExperienceItemModel).id
    );
    const newWorkExperienceItem = {
      ...data,
      id: Math.random().toString().slice(2),
    };
    experienceDetailsVar({
      ...experienceDetails,
      work: [...currentWorkExperienceItems, newWorkExperienceItem],
    });
    currentWorkDetailsVar({});
  };

  const removeWorkExperienceItem = (data: ExperienceItemModel) => {
    const id =
      data.id ?? (currentWorkDetailsVar() as WorkExperienceItemModel).id;
    const workExperienceItems = experienceDetails.work.filter(
      (item) => item.id !== id
    );

    experienceDetailsVar({
      ...experienceDetails,
      work: workExperienceItems,
    });
  };

  const editWorkExperienceItem = (data: ExperienceItemModel) => {
    const currentItem = experienceDetails.work.find((x) => x.id === data.id);
    currentWorkDetailsVar(currentItem);
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
