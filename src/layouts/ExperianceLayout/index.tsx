import React from 'react';
import Accordion from '../../components/Accordion';
import { AccordionModel } from '../../interfaces/shared.interface';
import * as LayoutStyled from '../styled';
import * as Styled from './styled';

interface ExperianceLayoutProps {
  experienceItems: AccordionModel[];
  onCancel: () => void;
  onSubmit: () => void;
}

const ExperianceLayout: React.FC<ExperianceLayoutProps> = ({
  experienceItems,
  onCancel,
  onSubmit,
}) => {
  return (
    <LayoutStyled.Layout>
      <LayoutStyled.Headline>Describe Your Experiance</LayoutStyled.Headline>
      <LayoutStyled.Content>
        {experienceItems.map((item, i) => (
          <Accordion key={i} headerEl={item.headerEl}>
            {item.contentEl}
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
      </LayoutStyled.Content>
    </LayoutStyled.Layout>
  );
};

export default ExperianceLayout;
