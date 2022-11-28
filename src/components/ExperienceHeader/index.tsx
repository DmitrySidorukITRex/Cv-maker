import React from 'react';
import {
  ExperienceChangingPosition,
  ExperienceSectionsName,
} from '../../appConstants';
import * as Styled from './styled';

interface ExperienceHeaderProps {
  title: ExperienceSectionsName;
  onChangePosition: (position: string, title: ExperienceSectionsName) => void;
}

const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({
  title,
  onChangePosition,
}) => {
  const changePosition = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    position: string
  ) => {
    event.stopPropagation();
    onChangePosition(position, title);
  };

  return (
    <Styled.Header>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Actions>
        <Styled.ButtonWithIcon
          onClick={(e) => changePosition(e, ExperienceChangingPosition.Up)}
        >
          <span className="material-symbols-outlined">expand_less</span>
        </Styled.ButtonWithIcon>
        <Styled.ButtonWithIcon
          onClick={(e) => changePosition(e, ExperienceChangingPosition.Down)}
        >
          <span className="material-symbols-outlined">expand_more</span>
        </Styled.ButtonWithIcon>
      </Styled.Actions>
    </Styled.Header>
  );
};

export default ExperienceHeader;
