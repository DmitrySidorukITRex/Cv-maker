import React from 'react';
import { ExperienceItemModel } from '../../interfaces/shared.interface';
import * as Styled from './styled';

interface WorkExperienceItemProps {
  item: ExperienceItemModel;
  onRemove: (item: ExperienceItemModel) => void;
  onEdit: (item: ExperienceItemModel) => void;
}

const ExperienceItem: React.FC<WorkExperienceItemProps> = ({
  item,
  onRemove,
  onEdit,
}) => {
  const getDate = (month: string, year: string): string => {
    const newMonth = month ? month : 'N/A';
    const newYear = year ? year : 'N/A';

    return `${newMonth} ${newYear}`;
  };

  return (
    <Styled.Item>
      <Styled.ItemInfo>
        <Styled.ItemTitle>{item.title}</Styled.ItemTitle>
        <Styled.ItemSubtitle>
          {getDate(item.startDateMonth, item.startDateYear) +
            ' - ' +
            getDate(item.endDateMonth, item.endDateYear)}
        </Styled.ItemSubtitle>
      </Styled.ItemInfo>
      <Styled.ItemActions>
        <Styled.ButtonWithIcon onClick={() => onRemove(item)}>
          <span className="material-symbols-outlined">close</span>
        </Styled.ButtonWithIcon>
        <Styled.ButtonWithIcon onClick={() => onEdit(item)}>
          <span className="material-symbols-outlined">edit</span>
        </Styled.ButtonWithIcon>
      </Styled.ItemActions>
    </Styled.Item>
  );
};

export default ExperienceItem;
