import { useRouter } from 'next/router';
import React from 'react';
import { ProgressBarItem } from '../../interfaces/shared.interface';
import * as Styled from './styled';

interface ProgressBarProps {
  items: ProgressBarItem[];
  onNavigate: (item: ProgressBarItem) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ items, onNavigate }) => {
  const activeIndex = items.findIndex((x) => x.isActive);

  return (
    <Styled.Wrapper>
      {items.map((item, i) => {
        return (
          <Styled.Item
            key={item.title}
            isActive={item.isActive}
            isPassed={i <= activeIndex}
            onClick={() => onNavigate(item)}
          >
            {item.title}
          </Styled.Item>
        );
      })}
    </Styled.Wrapper>
  );
};

export default ProgressBar;
