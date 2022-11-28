import React from 'react';
import { SectionItemModel } from '../../../../interfaces/templates';
import * as Styled from './styled';

interface SectionItemProps {
  details: SectionItemModel;
}

const SectionItem: React.FC<SectionItemProps> = ({ details }) => {
  const { title, subTitle, date, info } = details;

  return (
    <>
      {title?.trim().length ||
      subTitle?.trim().length ||
      date.trim().length ||
      info?.trim().length ? (
        <Styled.SectionItem>
          <Styled.SectionItemHeader>
            <Styled.SectionHeaderTitle>{title}</Styled.SectionHeaderTitle>
            <Styled.SectionHeaderDate>{date}</Styled.SectionHeaderDate>
          </Styled.SectionItemHeader>
          <Styled.SectionItemSubtitle>{subTitle}</Styled.SectionItemSubtitle>
          <Styled.SectionItemDetails>{info}</Styled.SectionItemDetails>
        </Styled.SectionItem>
      ) : null}
    </>
  );
};

export default SectionItem;
