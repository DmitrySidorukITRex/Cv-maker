import { useReactiveVar } from '@apollo/client';
import { useState } from 'react';
import {
  currentEducationDetailsVar,
  experienceDetailsVar,
} from '../../apollo/cache';
import EducationDetailsForm from '../../components/Forms/education-details';
import ExperienceItem from '../../components/ExperienceItem';
import {
  EducationDetailsModel,
  EducationExperienceItemModel,
  ExperienceItemModel,
} from '../../interfaces/shared.interface';
import * as LayoutStyled from '../styled';
import * as Styled from './styled';

const EducationExperienceLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const experienceDetails = useReactiveVar(experienceDetailsVar);
  const currentDetails = useReactiveVar(currentEducationDetailsVar);

  const onCancel = () => {
    setIsOpen(false);
  };

  const onSave = (
    data: EducationDetailsModel | EducationExperienceItemModel
  ) => {
    if (currentDetails) {
      editExperienceItem(data as EducationExperienceItemModel);
    } else {
      saveExperience(data as EducationDetailsModel);
    }

    setIsOpen(false);
    currentEducationDetailsVar(null);
  };

  const onEditExperienceItem = (data: ExperienceItemModel) => {
    const currentItem = experienceDetails.education.find(
      (x) => x.id === data.id
    );
    currentEducationDetailsVar(currentItem);
    setIsOpen(true);
  };

  const saveExperience = (data: EducationDetailsModel) => {
    const newExperienceItem = {
      ...data,
      id: Math.random().toString().slice(2),
    };
    experienceDetailsVar({
      ...experienceDetails,
      education: [...experienceDetails.education, newExperienceItem],
    });
  };

  const removeExperienceItem = (data: ExperienceItemModel) => {
    const id = data.id ?? (currentDetails as EducationExperienceItemModel).id;
    const experienceItems = experienceDetails.education.filter(
      (item) => item.id !== id
    );

    experienceDetailsVar({
      ...experienceDetails,
      education: [...experienceItems],
    });
  };

  const editExperienceItem = (data: EducationExperienceItemModel) => {
    const copy = [...experienceDetails.education];
    const currentItemIndex = copy.findIndex((x) => x.id === data.id);

    copy[currentItemIndex] = data;

    experienceDetailsVar({
      ...experienceDetails,
      education: [...copy],
    });
  };

  const getExperienceItem = (
    data: EducationExperienceItemModel
  ): ExperienceItemModel => {
    return {
      id: data.id,
      title: data.degree ? data.degree : 'Education',
      startDateMonth: data.startDateMonth,
      startDateYear: data.startDateYear,
      endDateMonth: data.endDateMonth,
      endDateYear: data.endDateYear,
    };
  };

  const btnText = experienceDetails.education.length
    ? 'Add another education experience'
    : 'Add your education experience';

  return (
    <Styled.Layout>
      {experienceDetails.education.map((item, i) => (
        <ExperienceItem
          key={i}
          item={getExperienceItem(item)}
          onRemove={removeExperienceItem}
          onEdit={onEditExperienceItem}
        />
      ))}
      {isOpen && (
        <EducationDetailsForm
          educationDetails={currentDetails}
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

export default EducationExperienceLayout;
