import React from 'react';
import PersonalDetailsForm from '../../components/Forms/personal-details';
import { PersonalDetailsModel } from '../../interfaces/shared.interface';
import * as LayoutStyled from '../styled';
import * as Styled from './styled';

interface PersonalDetailsLayoutProps {
  personalDetails: PersonalDetailsModel | {};
  onChange: (value: PersonalDetailsModel) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const PersonalDetailsLayout: React.FC<PersonalDetailsLayoutProps> = ({
  personalDetails,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <Styled.Layout>
      <Styled.SubHeadline>Let&apos;s start with</Styled.SubHeadline>
      <Styled.Headline>Contact Information</Styled.Headline>
      <Styled.Content>
        <PersonalDetailsForm
          personalDetails={personalDetails}
          onChange={onChange}
        />
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

export default PersonalDetailsLayout;
