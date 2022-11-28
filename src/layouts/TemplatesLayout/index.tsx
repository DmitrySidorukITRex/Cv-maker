import { useReactiveVar } from '@apollo/client';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {
  experienceDetailsVar,
  experienceSectionsVar,
  personalDetailsVar,
} from '../../apollo/cache';
import ComponentToPrint from '../../components/ComponentToPrint';
import { PersonalDetailsModel } from '../../interfaces/shared.interface';
import * as LayoutStyled from '../styled';
import * as Styled from './styled';

const TemplatesLayout = () => {
  const personalDetails = useReactiveVar(personalDetailsVar);
  const experienceDetails = useReactiveVar(experienceDetailsVar);
  const experienceSections = useReactiveVar(experienceSectionsVar);
  const ref = useRef<HTMLDivElement>(null);

  const onDownloadCV = useReactToPrint({
    content: () => ref.current!,
  });
  return (
    <LayoutStyled.Layout>
      <Styled.Content>
        <ComponentToPrint
          ref={ref}
          personalDetails={personalDetails as PersonalDetailsModel}
          experienceDetails={experienceDetails}
          experienceSections={experienceSections}
        />
      </Styled.Content>
      <LayoutStyled.FormActions>
        <LayoutStyled.CancelButton>Back</LayoutStyled.CancelButton>
        <LayoutStyled.SubmitButton onClick={onDownloadCV}>
          Download CV
        </LayoutStyled.SubmitButton>
      </LayoutStyled.FormActions>
    </LayoutStyled.Layout>
  );
};

export default TemplatesLayout;
