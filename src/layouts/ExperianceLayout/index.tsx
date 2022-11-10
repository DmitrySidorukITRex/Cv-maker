import React from 'react';
import Accordion from '../../components/Accordion';
import EducationDetailsForm from '../../components/Forms/education-details';
import {
  AccordionModel,
  EducationDetailsModel,
  ExperianceDetailsModel,
} from '../../interfaces/shared.interface';
import * as LayoutStyled from '../styled';
import * as Styled from './styled';

interface ExperianceLayoutProps {
  experienceItems: AccordionModel[];
  experienceDetails: ExperianceDetailsModel;
  onChangeEducationDetails: (data: EducationDetailsModel) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const ExperianceLayout: React.FC<ExperianceLayoutProps> = ({
  experienceItems,
  experienceDetails,
  onChangeEducationDetails,
  onCancel,
  onSubmit,
}) => {
  return (
    <Styled.Layout>
      <LayoutStyled.Headline>Describe Your Experiance</LayoutStyled.Headline>
      <Styled.Content>
        {experienceItems.map((item) => (
          <Accordion key={item.title} title={item.title}>
            <EducationDetailsForm
              educationDetails={experienceDetails.education}
              onChange={onChangeEducationDetails}
            />
          </Accordion>
        ))}
        <LayoutStyled.FormActions>
          <LayoutStyled.CancelButton onClick={onCancel}>
            Back
          </LayoutStyled.CancelButton>
          <LayoutStyled.SubmitButton onClick={onSubmit}>
            Save &#38; next
          </LayoutStyled.SubmitButton>
        </LayoutStyled.FormActions>
      </Styled.Content>
    </Styled.Layout>
  );
};

export default ExperianceLayout;
