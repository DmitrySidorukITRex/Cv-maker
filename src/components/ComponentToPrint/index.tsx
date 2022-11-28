import React, { useCallback, useMemo } from 'react';
import { ExperienceSectionsName } from '../../appConstants';
import {
  ExperianceDetailsModel,
  PersonalDetailsModel,
} from '../../interfaces/shared.interface';
import SectionItem from '../Templates/components/SectionItem';
import TemplateSidebar from '../Templates/components/Sidebar';
import {
  getEducationExperienceItemData,
  getWorkExperienceItemData,
  getSideBarData,
} from './helper';
import * as Styled from './styled';

interface Props {
  children?: React.ReactNode;
  personalDetails: PersonalDetailsModel;
  experienceDetails: ExperianceDetailsModel;
  experienceSections: ExperienceSectionsName[];
}
export type Ref = HTMLDivElement;

const ComponentToPrint = React.forwardRef<Ref, Props>(
  ({ personalDetails, experienceDetails, experienceSections }, ref) => {
    const educationDetails = experienceDetails.education;
    const workDetails = experienceDetails.work;

    const educationSection = useMemo(() => {
      return {
        title: ExperienceSectionsName.Education,
        content: educationDetails.map((details) => {
          return (
            <SectionItem
              key={details.id}
              details={getEducationExperienceItemData(details)}
            />
          );
        }),
      };
    }, [educationDetails]);

    const workSection = useMemo(() => {
      return {
        title: ExperienceSectionsName.Work,
        content: workDetails.map((details) => {
          return (
            <SectionItem
              key={details.id}
              details={getWorkExperienceItemData(details)}
            />
          );
        }),
      };
    }, [workDetails]);

    const sections = useCallback(() => {
      let items: { title: string; content: any }[] = [];

      experienceSections.forEach((section) => {
        switch (section) {
          case ExperienceSectionsName.Education:
            items.push(educationSection);
            break;
          case ExperienceSectionsName.Work:
            items.push(workSection);
          default:
            break;
        }
      });

      return items;
    }, [educationSection, workSection, experienceSections]);

    const name =
      !personalDetails.firstname?.length && !personalDetails.lastname?.length
        ? 'Your Name'
        : `${personalDetails.firstname} ${personalDetails.lastname}`;

    return (
      <Styled.Layout ref={ref}>
        <TemplateSidebar items={getSideBarData(personalDetails)} />
        <Styled.Sections>
          <Styled.SectiosName>{name}</Styled.SectiosName>
          {sections().map((section) => (
            <Styled.Section key={section.title}>
              <Styled.SectionTitle>{section.title}</Styled.SectionTitle>
              {section.content}
            </Styled.Section>
          ))}
        </Styled.Sections>
      </Styled.Layout>
    );
  }
);

ComponentToPrint.displayName = 'ComponentToPrint';

export default ComponentToPrint;
